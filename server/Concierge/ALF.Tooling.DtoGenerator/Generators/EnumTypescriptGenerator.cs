using ALF.Blocks.Enums.EnumAttributes;
using ALF.Blocks.Enums.EnumConversion;
using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Linq;
using System.Reflection;

namespace ALF.DtoGenerator.Generators
{
    class EnumTypescriptGenerator
    {
        /// <summary>
        /// {0} = Module name
        /// {1} = List of enum declarations
        /// </summary>
        const string TypescriptEnumFileTemplate = @"// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

{0}";

        /// <summary>
        /// {0} = Enum type name
        /// {1} = List of enum members
        /// </summary>
        const string TypescriptEnumTemplate = @"export enum {0} {{
{1}
}}
";

        /// <summary>
        /// {0} = Constant value name
        /// {1} = Constant numeric value
        /// </summary>
        const string TypescriptEnumMemberTemplate = @"  {0} = {1}";


        public static string GenerateTypescriptFileDefinitionForEnum(Type type)
        {
            return string.Format(TypescriptEnumFileTemplate, GenerateTypescriptDefinitionForEnum(type));
        }

        public static string GenerateTypescriptDefinitionForEnum(Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));
            if (!type.GetTypeInfoWithCache().IsEnum) throw new ArgumentException("Unable to generate typescriptdefinition for named type symbol, required type kind is Enum", nameof(type));

            // Process all the field members
            var definitions = EnumHelper.GetEnumValues(type).Select(x => string.Format(TypescriptEnumMemberTemplate, x.ToString(), GetEnumValue(x, type))).ToList();

            // Build the final typescript definition for the enum and return it
            return string.Format(TypescriptEnumTemplate, type.Name, string.Join($",{Environment.NewLine}", definitions));
        }

        private static string GetEnumValue(object enumAsObject, Type type)
        {
            var isNumericEnum = type.GetTypeInfoWithCache().GetCustomAttribute<StringEnumAttribute>() == null;
            if (isNumericEnum)
                return Convert.ToInt32(enumAsObject).ToString();
            var customValueAttribute = GetAttribute<StringEnumValueAttribute>(enumAsObject);
            return customValueAttribute == null ? $"\"{enumAsObject}\"" : $"\"{customValueAttribute.Value}\"";
        }

        public static TAttribute GetAttribute<TAttribute>(object value) where TAttribute : Attribute
        {
            var enumType = value.GetType();
            var name = Enum.GetName(enumType, value);
            return enumType.GetField(name).GetCustomAttribute<TAttribute>();
        }
    }
}
