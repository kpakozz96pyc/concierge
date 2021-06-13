using ALF.Blocks.Enums.EnumAttributes;
using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace ALF.DtoGenerator.Generators.Classes
{
    internal class ImportStatementsGenerator
    {
        private const string ImportStatementTemplate = @"import {{ {0} }} from ""{1}"";";
        private const string ReExportStatementTemplate = @"export * from ""{0}"";";

        public static string GetEnumImportStatement(Type type, IReadOnlyList<PropertyInfo> properties)
        {
            return string.Join(Environment.NewLine, GetEnumTypesFromProperties(properties).Select(t => GetEnumImportStatement(type, t)));
        }

        public static string GetAbsoluteImportStatementForEnum(IReadOnlyList<PropertyInfo> properties)
        {
            return string.Join(Environment.NewLine, GetEnumTypesFromProperties(properties)
                .Where(property => property.GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null)
                .Select(GetEnumImportStatement));
        }

        public static string GetClassImportStatements(Type type, IReadOnlyList<PropertyInfo> properties)
        {
            var types = new List<Type>();

            types.AddRange(GetExportedClassTypesInUseForProperties(properties));

            var baseType = type.GetTypeInfo().BaseType;
            if (!baseType.IsBaseObject() && !baseType.IsEditableFields())
                types.Add(baseType);

            // We don't want to import ourselves
            types = types.Except(new Type[] { type }).ToList();

            return types.Any()
                ? string.Join($"{Environment.NewLine}", types.Select(t => t == baseType ? GetImportStatementForClass(t) : GetImportStatementForReferencedType(type, t)).ToArray())
                : string.Empty;
        }

        public static string GetSerializerImportStatements(Type type) => GetSerializerImportStatements(type, new List<PropertyInfo>());

        public static string GetSerializerImportStatements(Type type, IReadOnlyList<PropertyInfo> properties)
        {
            var types = new List<Type>();

            var exportedTypesInUse = GetSerializerTypesInUseForProperties(properties);

            // We don't want to import ourselves
            exportedTypesInUse = exportedTypesInUse.Except(new[] { type }).ToList();

            types.AddRange(exportedTypesInUse);
            types.AddRange(type.GetAllInheritedClasses());

            types = types.Distinct().ToList();

            return types.Any()
                ? string.Join($"{Environment.NewLine}", types.Select(t => GetImportStatementForSerializer(type, t)).ToArray())
                : string.Empty;
        }

        public static string GetInheritedClassesImportStatement(Type type)
        {
            var types = type.GetAllInheritedClasses();
            return types.Any()
                ? string.Join($"{Environment.NewLine}", types.Select(GetImportStatementForClass))
                : string.Empty;
        }

        public static string GetImportStatementForSerializerInterface() => string.Format(ImportStatementTemplate, "Serializer", "@alf/core/models");

        public static string GetImportStatementForDateSerializer(List<PropertyInfo> properties)
        {
            var containsDate = properties.Any(property => property.PropertyType == typeof(DateTime) || property.PropertyType == typeof(DateTime?));
            return containsDate ? string.Format(ImportStatementTemplate, "serializeDate", "@alf/core") : null;
        }

        public static string GetImportStatementForClass(Type type) => string.Format(ImportStatementTemplate, type.GetOwnTypeName(), $"@alf/models/{GetImportPathForReferencedClassType(type)}");

        public static string GetExportStatementForClass(Type type) => string.Format(ReExportStatementTemplate, $"./{GetImportPathForReferencedClassType(type)}");

        public static string GetExportStatementForEnum(Type type) => string.Format(ReExportStatementTemplate, GetExportPathForEnum(type));

        private static string GetImportStatementForReferencedType(Type referencedType, Type type)
        {
            var propertiesOfType = referencedType.GetProperties().Where(property =>
            {
                if (property.IsNormalizerIdReference())
                    return property.GetNormalizerIdReferencedType() == type;

                if (property.PropertyType.IsDictionary())
                    return property.PropertyType.GetDictionaryTypes().valueType == type;

                if (property.PropertyType.IsEnumerable())
                    return property.PropertyType.GetEnumerableType() == type;

                return property.PropertyType == type;
            }).ToList();

            var typenames = new List<string>();


            if (propertiesOfType.Any(property => property.IsModelReference()))
                typenames.Add(type.Name);
            if (propertiesOfType.Any(property => !property.IsModelReference()))
                typenames.Add(type.GetReferencedTypeName());

            return string.Format(ImportStatementTemplate, string.Join(",", typenames), referencedType.GetImportPathForReferencedClassType(type));
        }

        private static string GetImportStatementForSerializer(Type referencedType, Type type) => string.Format(ImportStatementTemplate, type.GetSerializerTypeName(), referencedType.GetImportPathForSerializer(type));

        private static List<Type> GetEnumTypesFromProperties(IReadOnlyList<PropertyInfo> properties)
        {
            var enumTypes = properties.Select(p => p.PropertyType).Where(property => property.GetTypeInfo().IsEnum);
            var nullableEnumTypes = properties.Select(p => p.PropertyType).Where(t => t.IsNullable()).Select(t => t.GetNullableType()).Where(t => t.GetTypeInfo().IsEnum);
            var enumerableEnumTypes = properties.Select(p => p.PropertyType).Where(t => t.IsEnumerable()).Select(t => t.GetEnumerableType()).Where(t => t.GetTypeInfo().IsEnum);
            var enumTypesInDictionaries = properties.Select(p => p.PropertyType).Where(t => t.IsDictionary()).Select(t => t.GetDictionaryTypes().valueType).Where(t => t.GetTypeInfo().IsEnum);
            var enumTypesInDictionaryKeys = properties.Select(p => p.PropertyType).Where(t => t.IsDictionary()).Select(t => t.GetDictionaryTypes().keyType).Where(t => t.GetTypeInfo().IsEnum);

            return enumTypes.Concat(nullableEnumTypes).Concat(enumerableEnumTypes).Concat(enumTypesInDictionaries).Concat(enumTypesInDictionaryKeys).Distinct().ToList();
        }

        private static string GetEnumImportStatement(Type type) => string.Format(ImportStatementTemplate, type.Name, GetAbsoluteImportPathForEnum(type));

        private static string GetEnumImportStatement(Type referencedType, Type type) => string.Format(ImportStatementTemplate, type.Name, referencedType.GetEnumImportPath(type));

        private static string GetAbsoluteImportPathForEnum(Type type) => $"@alf/models/{type.GetGeneratedNamespace()}/enums/{type.Name.ToKebabCase(NamingConvention.PascalCase)}";

        private static string GetExportPathForEnum(Type type) => $"./{type.GetGeneratedNamespace()}/enums/{type.Name.ToKebabCase(NamingConvention.PascalCase)}";

        private static string GetImportPathForReferencedClassType(Type type) => $"{type.GetGeneratedNamespace()}/{type.GetOwnTypeName().ToKebabCase(NamingConvention.PascalCase)}";

        private static IReadOnlyList<Type> GetExportedClassTypesInUseForProperties(IReadOnlyList<PropertyInfo> properties)
        {
            var exportedTypes = new List<Type>();

            // Get the direct typed exportable types
            exportedTypes.AddRange(properties
                .Select(property => property.PropertyType)
                .Where(type => type.IsExportedToTypescript() && type.GetTypeInfo().IsClass));

            // Get the typed list types that are also exportable
            exportedTypes.AddRange(properties
                .SelectMany(property =>
                {
                    // Hold the type to include
                    var typesToExport = new List<Type>();

                    // First check if this property is decorated with an attribute saying it is actualy
                    // a list of keys referecing some other type
                    var attribute = property.GetCustomAttribute<NormalizerIdReferenceAttribute>();
                    if (attribute != null)
                        return new List<Type> { attribute.ForType };

                    // Check if this is a generic enumerable type, and if so return the generic type
                    // unless it's an enum type (which will get an import statement generated in another place)
                    if (property.PropertyType.IsEnumerable())
                    {
                        var enumerableType = property.PropertyType.GetEnumerableType();
                        if (enumerableType.IsExportedToTypescript() && !enumerableType.GetTypeInfo().IsEnum)
                        {
                            typesToExport.Add(enumerableType);
                        }
                    }

                    // Check if this is a generic dictionary type, and if so return the types
                    // for both the key and value
                    if (property.PropertyType.IsDictionary())
                    {
                        var dictionaryTypes = property.PropertyType.GetGenericArguments();
                        typesToExport.AddRange(dictionaryTypes.Where(t => t.IsExportedToTypescript() && !t.GetTypeInfo().IsEnum));
                    }

                    return typesToExport;
                })
                .Where(typeSymbol => typeSymbol != null && typeSymbol.IsExportedToTypescript()));

            return exportedTypes.Distinct().ToList();
        }

        private static IReadOnlyList<Type> GetSerializerTypesInUseForProperties(IReadOnlyList<PropertyInfo> properties)
        {
            var propertiesWithExportedTypes = properties
                .Where(property =>
                    property.PropertyType.GetTypeInfo().IsClass
                        && property.PropertyType.IsExportedToTypescript()
                        && (property.IsModelReference() || !property.PropertyType.IsNormalizerReferencedType())
                );

            // Get the typed list types that are also exportable
            var listExportedTypes = properties.Select(property =>
                {
                    // Check if this is a generic enumerable type, and if so return the generic type
                    // unless it's an enum type (which will get an import statement generated in another place)
                    if (!property.PropertyType.IsEnumerable()) return null;

                    var genericType = property.PropertyType.GetEnumerableType();
                    if (genericType.IsExportedToTypescript() && (!genericType.IsNormalizerReferencedType() || property.IsModelReference()) && !genericType.GetTypeInfo().IsEnum)
                    {
                        return genericType;
                    }
                    return null;
                })
                .Where(typeSymbol => typeSymbol != null);

            return propertiesWithExportedTypes.Select(property => property.PropertyType).Concat(listExportedTypes).Distinct().ToList();
        }
    }
}
