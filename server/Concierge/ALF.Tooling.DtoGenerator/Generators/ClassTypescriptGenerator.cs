using ALF.DtoGenerator.Generators.Classes;
using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Linq;
using System.Reflection;

namespace ALF.DtoGenerator.Generators
{
    class ClassTypescriptGenerator
    {
        public const string ClassDefinitionTypescriptTemplate = @"
{0}{1}
// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

{2}export class {3}{4} {{

    static $name = ""{3}"";
    static typeNameHint = ""{9}""

{8}{5}

    constructor(data?: Partial<{3}>) {{{6}
        Object.assign(this, data);{7}
    }}
}}
";

        private const string IndentOne = "    ";
        private const string IndentTwo = "        ";

        public static string GenerateTypescriptClassDefinition(Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));
            if (!type.GetTypeInfoWithCache().IsClass)
                throw new ArgumentException("Unable to generate typescript definition for named type symbol, required type kind is Class", nameof(type));

            // Next we need to extract all properties
            var properties = type.IsEditableFields()
                ? type.GetPropertiesWithCache().ToList()
                : type.GetTypeInfoWithCache().DeclaredProperties.ToList();

            // Remove any properties explicitly flagged to be ignored
            properties = properties
                .Where(property => property.GetCustomAttribute<IgnoreInDtoGeneratorAttribute>() == null)
                .ToList();

            // Build the normalized id declaration
            var normalizedIdTypeDeclaration = NormalizedIdDeclarationGenerator.GenerateNormalizedIdDeclaration(type);

            // Build all the pieces of the class definition
            var propertyDeclarations = properties.Select(property => $"{IndentOne}{PropertyDeclarationGenerator.GeneratePropertyDeclaration(property)}").ToList();

            // Class inheritance
            var inheritanceStatement = "";
            var superConstructorCallStatement = "";
            var typeHintStatement = "";

            if (!type.GetTypeInfoWithCache().BaseType.IsBaseObject() && !type.GetTypeInfoWithCache().BaseType.IsEditableFields())
            {
                inheritanceStatement = $" extends {type.GetTypeInfoWithCache().BaseType.GetOwnTypeName()}";
                superConstructorCallStatement = $"{Environment.NewLine}{IndentTwo}super(data);";
                typeHintStatement = $"{Environment.NewLine}{IndentTwo}this.$type = {type.GetOwnTypeName()}.typeNameHint;";
            }

            // Base class $type declaration for classes that has inherited classes, and is the root object
            var baseClassTypeFieldDeclaration = "";
            if (type.HasInheritedClasses() && type.GetTypeInfoWithCache().BaseType.IsBaseObject())
            {
                baseClassTypeFieldDeclaration = $"{IndentOne}$type: string;{Environment.NewLine}";
            }

            // Build the import statements
            var enumImportStatement = ImportStatementsGenerator.GetEnumImportStatement(type, properties);
            if (!string.IsNullOrWhiteSpace(enumImportStatement))
                enumImportStatement += Environment.NewLine;

            var classTypesImportStatement = ImportStatementsGenerator.GetClassImportStatements(type, properties);
            if (!string.IsNullOrWhiteSpace(classTypesImportStatement))
                classTypesImportStatement += Environment.NewLine;

            // Combine all the different pieces into the class declaration string template
            return string.Format(ClassDefinitionTypescriptTemplate,
                enumImportStatement,
                classTypesImportStatement,
                normalizedIdTypeDeclaration,
                type.GetOwnTypeName(),
                inheritanceStatement,
                string.Join($"{Environment.NewLine}", propertyDeclarations.ToArray()),
                superConstructorCallStatement,
                typeHintStatement,
                baseClassTypeFieldDeclaration,
                type.GetJsonTypeName()
            );
        }
    }
}
