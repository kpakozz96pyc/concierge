using ALF.Blocks.Enums.EnumAttributes;
using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Linq;
using System.Reflection;

namespace ALF.DtoGenerator.Generators.Classes
{
    internal class PropertyDeserializeAssignGenerator
    {
        private const string RegularFieldAssign = @"{1}
";
        private const string NullableFieldAssign = @"if (copy.{0} !== undefined)
            {1}
";

        private const string PropertyAssignTemplate = @"copy.{0} = {1};";
        private const string PropertyAssignForDate = @"new Date(copy.{0})";
        private const string PropertyAssignForEnum = @"{1}[copy.{0}]";
        private const string PropertyAssignForClass = @"new {1}().deserialize(copy.{0})";
        private const string PropertyAssignForTypedArray = @"(copy.{0} || []).map(new {1}().deserialize)";
        private const string PropertyAssignForEnumArray = @"(copy.{0} || []).map((item: any) => {1}[item])";
        private const string PropertyAssignForEnumDictionary = @"Object.keys(copy.{0}).reduce((accumulator, current) => {{
            accumulator[current] = {1}[copy.{0}[current]];
            return accumulator;
        }}, {{}} as Dictionary<any>)";

        public static string GeneratePropertyDeserializeAssign(PropertyInfo property)
        {
            var assignment = GenerateInternalPropertyDeserializeAssign(property);
            if (string.IsNullOrWhiteSpace(assignment))
                return string.Empty;

            var template = property.PropertyType.IsNullable() ? NullableFieldAssign : RegularFieldAssign;
            var formatted = string.Format(PropertyAssignTemplate, property.Name.ToResolvedJsonName(), assignment);
            return string.Format(template, property.Name.ToResolvedJsonName(), formatted);
        }

        public static string GenerateInternalPropertyDeserializeAssign(PropertyInfo property)
        {
            if (TryGetEnumPropertyAssign(property, out string assignmentStatement))
                return assignmentStatement;

            // Is this a date type?
            var dateTypes = new[] { typeof(DateTime), typeof(DateTime?), typeof(DateTimeOffset), typeof(DateTimeOffset?) };
            if (dateTypes.Contains(property.PropertyType))
                return GetDatePropertyAssign(property);

            // Is this an exported type that is not a normalizer type?
            if (property.PropertyType.GetTypeInfo().IsClass && property.PropertyType.IsExportedToTypescript() && !property.PropertyType.IsNormalizerReferencedType())
                return GetClassPropertyAssign(property);

            if (property.PropertyType.IsDictionary())
            {
                var (_, valueType) = property.PropertyType.GetDictionaryTypes();

                // Is the dictionary type exportable?
                if (valueType.IsExportedToTypescript() && !valueType.IsNormalizerReferencedType())
                {
                    // Is the dictionary type an enum type?
                    return valueType.GetTypeInfo().IsEnum && valueType.GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null ? GetEnumDictionaryPropertyAssign(property, valueType) : string.Empty;
                }
            }

            // Is this a typed array type?
            if (property.PropertyType.IsEnumerable())
            {
                // Get the array type
                var arrayType = property.PropertyType.GetEnumerableType();

                // Is the array type exportable?
                if (arrayType.IsExportedToTypescript() && (!arrayType.IsNormalizerReferencedType() || property.IsModelReference()))
                {
                    // Is the array type an enum type?
                    return arrayType.GetTypeInfo().IsEnum ? GetEnumArrayPropertyAssign(property, arrayType) : GetTypedArrayPropertyAssign(property, arrayType);
                }
            }

            // For all other types
            return string.Empty;
        }

        private static bool TryGetEnumPropertyAssign(PropertyInfo property, out string assignmentStatement)
        {
            var type = property.PropertyType;

            if (type.GetTypeInfo().IsEnum)
            {
                assignmentStatement = type.GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null
                    ? string.Format(PropertyAssignForEnum, property.Name.ToResolvedJsonName(), type.Name)
                    : string.Empty;
                return true;
            }

            if (type.IsNullable())
            {
                var nullableType = type.GetNullableType().GetTypeInfo();
                if (nullableType.IsEnum)
                {
                    assignmentStatement = nullableType.GetCustomAttribute<StringEnumAttribute>() == null
                        ? string.Format(PropertyAssignForEnum, property.Name.ToResolvedJsonName(), type.GetNullableType().Name)
                        : string.Empty;
                    return true;
                }
            }

            assignmentStatement = null;
            return false;
        }

        private static string GetDatePropertyAssign(PropertyInfo property)
        {
            return string.Format(PropertyAssignForDate, property.Name.ToResolvedJsonName());
        }

        private static string GetClassPropertyAssign(PropertyInfo property)
        {
            return string.Format(PropertyAssignForClass, property.Name.ToResolvedJsonName(), property.PropertyType.GetSerializerTypeName());
        }

        private static string GetTypedArrayPropertyAssign(PropertyInfo property, Type arrayType)
        {
            return string.Format(PropertyAssignForTypedArray, property.Name.ToResolvedJsonName(), arrayType.GetSerializerTypeName());
        }

        private static string GetEnumArrayPropertyAssign(PropertyInfo property, Type arrayType)
        {
            return property.PropertyType.GetEnumerableType().GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null
                ? string.Format(PropertyAssignForEnumArray, property.Name.ToResolvedJsonName(), arrayType.GetReferencedTypeName())
                : string.Empty;
        }

        private static string GetEnumDictionaryPropertyAssign(PropertyInfo property, Type dictionaryValueType)
        {
            return string.Format(PropertyAssignForEnumDictionary, property.Name.ToResolvedJsonName(), dictionaryValueType.GetReferencedTypeName());
        }
    }
}
