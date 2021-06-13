using ALF.Blocks.Enums.EnumAttributes;
using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Reflection;

namespace ALF.DtoGenerator.Generators.Classes
{
    internal class JsonSerializeAssignGenerator
    {
        private const string PropertyAssignForDefault = "{0}: entity.{0}";
        private const string PropertyAssignForDate = @"{0}: serializeDate(entity.{0})";
        private const string PropertyAssignForDateTime = @"{0}: entity.{0}
                ? entity.{0}.toISOString()
                : undefined";
        private const string PropertyAssignForEnum = @"{0}: {1}[entity.{0}]";
        private const string PropertyAssignForNullableEnum = @"{0}: entity.{0} !== null && entity.{0} !== undefined
                ? {1}[entity.{0}]
                : undefined";
        private const string PropertyAssignForClass = @"{0}: new {1}().serialize(entity.{0}, _forceTypeHint)";
        private const string PropertyAssignForTypedArray = @"{0}: entity.{0}
                ? entity.{0}.map(e => new {1}().serialize(e, _forceTypeHint))
                : undefined";
        private const string PropertyAssignForEnumArray = @"{0}: entity.{0}
                ? entity.{0}.map(item => {1}[item])
                : undefined";
        private const string PropertyAssignForEnumDictionary = @"{0}: entity.{0}
                ? Object.keys(entity.{0}).reduce((accumulator, current) => {{
                    accumulator[current] = {1}[(entity!.{0} as any)[current]];
                    return accumulator;
                }}, {{}} as Dictionary<any>)
                : undefined";

        public static string GeneratePropertyJsonSerializeAssign(PropertyInfo property)
        {
            if (TryGetEnumSerializeAssign(property, out var assignmentStatement))
                return assignmentStatement;

            // Is this a date type?
            var isDate = property.PropertyType == typeof(DateTime) || property.PropertyType == typeof(DateTime?);
            if (isDate)
                return GetDateJsonSerializeAssign(property);

            // Is this a date & time type?
            var isDateTime = property.PropertyType == typeof(DateTimeOffset) || property.PropertyType == typeof(DateTimeOffset?);
            if (isDateTime)
                return GetDateTimeJsonSerializeAssign(property);

            // Is this an exported type?
            if (property.PropertyType.GetTypeInfo().IsClass &&
                property.PropertyType.IsExportedToTypescript() &&
                (property.IsReferencedModelType() || !property.PropertyType.IsNormalizerReferencedType()))

                return GetClassJsonSerializeAssign(property);

            if (property.PropertyType.IsDictionary())
            {
                var (_, valueType) = property.PropertyType.GetDictionaryTypes();

                // Is the dictionary type exportable?
                if (valueType.IsExportedToTypescript() && !valueType.IsNormalizerReferencedType())
                {
                    // Is the dictionary type an enum type?
                    return valueType.GetTypeInfo().IsEnum && valueType.GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null ? GetEnumDictionaryJsonSerializeAssign(property, valueType) : GetDefaultJsonSerializeAssign(property);
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
                    // Is the array type an enum type
                    return arrayType.GetTypeInfo().IsEnum ? GetEnumArrayJsonSerializeAssign(property, arrayType) : GetTypedArrayJsonSerializeAssign(property, arrayType);
                }

            }

            // For all other types
            return GetDefaultJsonSerializeAssign(property);
        }

        private static bool TryGetEnumSerializeAssign(PropertyInfo property, out string assignmentStatement)
        {
            var type = property.PropertyType;

            if (type.GetTypeInfo().IsEnum)
            {
                assignmentStatement = type.GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null
                    ? string.Format(PropertyAssignForEnum, property.Name.ToResolvedJsonName(), type.Name)
                    : GetDefaultJsonSerializeAssign(property);
                return true;
            }

            if (type.IsNullable())
            {
                var nullableType = type.GetNullableType();
                if (nullableType.GetTypeInfo().IsEnum)
                {
                    assignmentStatement = nullableType.GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null
                        ? string.Format(PropertyAssignForNullableEnum, property.Name.ToResolvedJsonName(), nullableType.Name)
                        : GetDefaultJsonSerializeAssign(property);
                    return true;
                }
            }

            assignmentStatement = null;
            return false;
        }

        private static string GetDateJsonSerializeAssign(PropertyInfo property)
        {
            return string.Format(PropertyAssignForDate, property.Name.ToResolvedJsonName());
        }

        private static string GetDateTimeJsonSerializeAssign(PropertyInfo property)
        {
            return string.Format(PropertyAssignForDateTime, property.Name.ToResolvedJsonName());
        }

        private static string GetClassJsonSerializeAssign(PropertyInfo property)
        {
            return string.Format(PropertyAssignForClass, property.Name.ToResolvedJsonName(), property.PropertyType.GetSerializerTypeName());
        }

        private static string GetTypedArrayJsonSerializeAssign(PropertyInfo property, Type arrayType)
        {
            return string.Format(PropertyAssignForTypedArray, property.Name.ToResolvedJsonName(), arrayType.GetSerializerTypeName());
        }

        private static string GetEnumArrayJsonSerializeAssign(PropertyInfo property, Type enumArrayType)
        {
            return property.PropertyType.GetEnumerableType().GetTypeInfo().GetCustomAttribute<StringEnumAttribute>() == null
                ? string.Format(PropertyAssignForEnumArray, property.Name.ToResolvedJsonName(), enumArrayType.Name)
                : GetDefaultJsonSerializeAssign(property);
        }

        private static string GetEnumDictionaryJsonSerializeAssign(PropertyInfo property, Type enumDictionaryValueType)
        {
            return string.Format(PropertyAssignForEnumDictionary, property.Name.ToResolvedJsonName(), enumDictionaryValueType.Name);
        }

        private static string GetDefaultJsonSerializeAssign(PropertyInfo property) => string.Format(PropertyAssignForDefault, property.Name.ToResolvedJsonName());
    }
}
