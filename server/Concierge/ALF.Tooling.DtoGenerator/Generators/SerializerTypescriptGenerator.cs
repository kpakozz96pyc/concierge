using ALF.DtoGenerator.Generators.Classes;
using ALF.DtoGenerator.Generators.Extensions;
using ALF.Shared.Dto.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace ALF.DtoGenerator.Generators
{
    class SerializerTypescriptGenerator
    {
        private const string FileTemplate = @"{0}

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

{1}";

        private const string ClassDefinitionTemplate = @"export class {0} implements {1} {{

    deserialize(data: undefined): undefined
    deserialize(data: any): {2}
    deserialize(data: any): {2} | undefined {{
        if (!data) {{
            return undefined;
        }}
{3}
    }}

    serialize(entity: {2} | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: {2}, _forceTypeHint?: boolean): any
    serialize(entity: {2} | undefined, _forceTypeHint?: boolean): any | undefined {{
        if (!entity) {{
            return undefined;
        }}
{4}
    }}
}}
{5}";

        public const string RegularDeserializeContentTemplate = @"{2}
        const copy = {{ ...data }};
{1}
        return new {0}(copy);";

        public const string DefaultedDeserializeContentTemplate = @"{2}
        const copy = {{ ...data }};
{1}
        return initializeDefaultValues(new {0}(copy));";

        public const string AbstractClassDeserializeContentTemplate = @"{1}
        throw new Error(""Unable to deserialize {0}, cannot infer type from "" + data.$type);";

        public const string RegularSerializeContentTemplate = @"{1}
        return {{
{0}
        }};";

        public const string DefaultedSerializeContentTemplate = @"{1}
        entity! = initializeDefaultValues(entity);
        return {{
{0}
        }};";

        public const string AbstractClassSerializeContentTemplate = @"{1}
        throw new Error(""Unable to serialize {0}, cannot infer type from "" + entity.$type);";

        public const string InheritedTypeSwitchDeserializeContentTemplate = @"
        if (data.$type === ""{0}"")
            return new {1}Serializer().deserialize(data);";

        public const string InheritedTypeSwitchSerializeContentTemplate = @"
        if (entity.$type === ""{0}"")
            return new {1}Serializer().serialize(entity as {1}, _forceTypeHint);";

        private const string IndentTwo = "        ";
        private const string IndentThree = "            ";

        public static string GenerateDefinition(IReadOnlyCollection<Type> types)
        {
            if (types == null) throw new ArgumentNullException(nameof(types));

            var serializerNames = types.Select(t => t.GetSerializerTypeName());
            var importStatements = types.Select(GenerateImportStatements)
                .SelectMany(statements => statements.Split(Environment.NewLine)).Distinct()
                .Where(statement => !serializerNames.Any(statement.Contains));
            var definitions = types.Select(GenerateClassDefinition);

            return string.Format(FileTemplate, string.Join(Environment.NewLine, importStatements),
                string.Join(Environment.NewLine, definitions));
        }

        public static string GenerateDefinition(Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));

            return string.Format(FileTemplate, GenerateImportStatements(type), GenerateClassDefinition(type));
        }

        public static string GenerateImportStatements(Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));
            if (!type.GetTypeInfoWithCache().IsClass) throw new ArgumentException("Unable to generate definition for type, required type kind is Class", nameof(type));

            var properties = type.GetPropertiesWithCache()
                .Where(property => property.GetCustomAttribute<IgnoreInDtoGeneratorAttribute>() == null)
                .ToList();

            return GetImportStatements(type, properties);
        }

        private static string GenerateClassDefinition(Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));
            if (!type.GetTypeInfoWithCache().IsClass) throw new ArgumentException("Unable to generate definition for type, required type kind is Class", nameof(type));

            var properties = type.GetPropertiesWithCache()
                .Where(property => property.GetCustomAttribute<IgnoreInDtoGeneratorAttribute>() == null)
                .ToList();

            // Build all the pieces of the class definition
            var propertyDeserializeAssigns = BuildPropertyDeserializeAssigns(properties);
            var propertySerializeAssigns = BuildPropertySerializeAssigns(type, properties);

            // Interface inheritance
            var implementsStatement = $"Serializer<{type.GetOwnTypeName()}>";

            // Combine all the different pieces into the class declaration string template
            return string.Format(ClassDefinitionTemplate,
                type.GetSerializerTypeName(),
                implementsStatement,
                type.GetOwnTypeName(),
                GetDeserializeContent(type, propertyDeserializeAssigns),
                GetSerializeContent(type, propertySerializeAssigns),
                type.GetTypeInfoWithCache().IsUsingDefaultValues() ? DefaultValueInitializerGenerator.GenerateDefaultValueInitializer(type) : string.Empty
            );
        }

        private static IEnumerable<string> BuildPropertySerializeAssigns(Type type, IEnumerable<PropertyInfo> properties)
        {
            var baseAssignments = new List<string>();

            var baseType = type.GetTypeInfoWithCache().BaseType;

            if (!baseType.IsBaseObject() && !baseType.IsEditableFields())
            {
                baseAssignments.Add($"{IndentThree}$type: entity.$type");
            }
            else
            {
                baseAssignments.Add($"{IndentThree}$type: _forceTypeHint ? {type.GetOwnTypeName()}.typeNameHint : undefined");
            }

            var assignments = properties
                .Select(property =>
                    $"{IndentThree}{JsonSerializeAssignGenerator.GeneratePropertyJsonSerializeAssign(property)}")
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .ToList();

            return baseAssignments.Concat(assignments);
        }

        private static IEnumerable<string> BuildPropertyDeserializeAssigns(IEnumerable<PropertyInfo> properties)
        {
            var assignments = properties
                .Select(PropertyDeserializeAssignGenerator.GeneratePropertyDeserializeAssign)
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .ToList();

            return assignments.Select(x => $"{IndentTwo}{x}");
        }

        private static string GetImportStatements(Type type, List<PropertyInfo> properties)
        {
            var enumImportStatement = type.GetTypeInfoWithCache().IsAbstract
                ? string.Empty
                : ImportStatementsGenerator.GetAbsoluteImportStatementForEnum(properties);

            if (!string.IsNullOrWhiteSpace(enumImportStatement))
                enumImportStatement += Environment.NewLine;

            var classTypeSerializersImportStatement = type.GetTypeInfoWithCache().IsAbstract
                ? ImportStatementsGenerator.GetSerializerImportStatements(type)
                : ImportStatementsGenerator.GetSerializerImportStatements(type, properties);

            if (!string.IsNullOrWhiteSpace(classTypeSerializersImportStatement))
                classTypeSerializersImportStatement += Environment.NewLine;

            var inheritedClassesImportStatement = ImportStatementsGenerator.GetInheritedClassesImportStatement(type);
            if (!string.IsNullOrWhiteSpace(inheritedClassesImportStatement))
                inheritedClassesImportStatement += Environment.NewLine;

            var dateSerializerImportStatement = type.GetTypeInfoWithCache().IsAbstract
                ? string.Empty
                : ImportStatementsGenerator.GetImportStatementForDateSerializer(properties);

            if (!string.IsNullOrWhiteSpace(dateSerializerImportStatement))
                dateSerializerImportStatement += Environment.NewLine;

            var serializerInterfaceImportStatement = ImportStatementsGenerator.GetImportStatementForSerializerInterface() + Environment.NewLine;
            var selfClassTypeImportStatement = ImportStatementsGenerator.GetImportStatementForClass(type);

            return enumImportStatement + classTypeSerializersImportStatement + inheritedClassesImportStatement +  dateSerializerImportStatement +
                   serializerInterfaceImportStatement + selfClassTypeImportStatement;
        }

        private static string GetDeserializeContent(Type type, IEnumerable<string> propertyDeserializeAssigns)
        {
            if (type.GetTypeInfoWithCache().IsAbstract)
                return string.Format(AbstractClassDeserializeContentTemplate, type.GetOwnTypeName(), GetInheritedTypeSwitchSerialization(type));

            var template = type.GetTypeInfoWithCache().IsUsingDefaultValues() ? DefaultedDeserializeContentTemplate : RegularDeserializeContentTemplate;

            return string.Format(template, type.GetOwnTypeName(), string.Join(Environment.NewLine, propertyDeserializeAssigns), GetInheritedTypeSwitchSerialization(type));
        }

        private static string GetSerializeContent(Type type, IEnumerable<string> propertySerializeAssigns)
        {
            if (type.GetTypeInfoWithCache().IsAbstract)
            {
                return string.Format(AbstractClassSerializeContentTemplate,
                    type.GetOwnTypeName(),
                    GetInheritedTypeSwitchDeserialization(type));
            }

            var template = type.GetTypeInfoWithCache().IsUsingDefaultValues() ? DefaultedSerializeContentTemplate : RegularSerializeContentTemplate;
            return string.Format(template,  string.Join($",{Environment.NewLine}", propertySerializeAssigns), GetInheritedTypeSwitchDeserialization(type));
        }

        private static string GetInheritedTypeSwitchSerialization(Type type)
        {
            var builder = new StringBuilder();

            if (!type.HasInheritedClasses())
                return "";

            foreach(var inheritedType in type.GetAllInheritedClasses())
            {
                builder.AppendLine(string.Format(
                    InheritedTypeSwitchDeserializeContentTemplate,
                    inheritedType.GetJsonTypeName(),
                    inheritedType.Name));
            }

            return builder.ToString();
        }

        private static string GetInheritedTypeSwitchDeserialization(Type type)
        {
            var builder = new StringBuilder();

            if (!type.HasInheritedClasses())
                return "";

            foreach (var inheritedType in type.GetAllInheritedClasses())
            {
                builder.AppendLine(string.Format(
                    InheritedTypeSwitchSerializeContentTemplate,
                    inheritedType.GetJsonTypeName(),
                    inheritedType.Name));
            }

            return builder.ToString();
        }
    }
}
