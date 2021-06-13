using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace ALF.DtoGenerator.Generators.Classes
{
    internal class PropertyDeclarationGenerator
    {
        private const string NullablePropertyDeclarationTemplate = @"{0}?: {1};";
        private const string PropertyDeclarationTemplate = @"{0}: {1}{2};";
        private const string ArrayDeclarationTemplate = @"{0}[]";
        private const string DictionaryDeclarationTemplate = @"{{ [key: {0}]: {1} }}";
        private const string EnumDictionaryDeclarationTemplate = @"{{ [key in {0}]?: {1} }}";

        private const string DefaultValueDeclarationArrayTemplate = " = []";
        private const string DefaultValueDeclarationDictionaryTemplate = " = {}";

        public static string GeneratePropertyDeclaration(PropertyInfo property)
        {
            var template = PropertyDeclarationTemplate;

            var isNullableType = !property.IsRequiredProperty() && (property.PropertyType.GetTypeInfo().IsClass || property.PropertyType.IsNullable());
            if (isNullableType)
            {
                template = property.PropertyType.IsEnumerable() ? PropertyDeclarationTemplate : NullablePropertyDeclarationTemplate;
            }

            return string.Format(template, property.Name.ToResolvedJsonName(), GetTypeDeclaration(property), GetDefaultValueDeclaration(property));
        }

        private static string GetDefaultValueDeclaration(PropertyInfo property)

        {
            if (property.PropertyType.IsDictionary())
                return DefaultValueDeclarationDictionaryTemplate;

            if (property.PropertyType.IsEnumerable())
                return DefaultValueDeclarationArrayTemplate;

            return "";
        }

        private static string GetTypeDeclaration(PropertyInfo property)
        {
            string typeDeclaration;

            if (TryGetModelReferencePropertyTypeDeclaration(property, out typeDeclaration))
                return typeDeclaration;

            if (TryGetNormalizerIdPropertyTypeDeclaration(property, out typeDeclaration))
                return typeDeclaration;

            if (TryGetNormalizerIdReferencePropertyTypeDeclaration(property, out typeDeclaration))
                return typeDeclaration;

            var type = property.PropertyType.IsNullable() ? property.PropertyType.GetNullableType() : property.PropertyType;
            return GetTypeDeclaration(type);
        }

        private static string GetTypeDeclaration(Type type)
        {
            string typeDeclaration;

            if (TryGetPrimitiveTypeDeclaration(type, out typeDeclaration))
                return typeDeclaration;

            if (TryGetEnumTypeDeclaration(type, out typeDeclaration))
                return typeDeclaration;

            if (TryGetByteArrayTypeDeclaration(type, out typeDeclaration))
                return typeDeclaration;

            if (TryGetDictionaryTypeDeclaration(type, out typeDeclaration))
                return typeDeclaration;

            if (TryGetEnumDictionaryTypeDeclaration(type, out typeDeclaration))
                return typeDeclaration;

            if (TryGetArrayTypeDeclaration(type, out typeDeclaration))
                return typeDeclaration;

            return type.GetReferencedTypeName();
        }

        private static bool TryGetByteArrayTypeDeclaration(Type type, out string typeDeclaration)
        {
            if (type.IsArray)
            {
                if (type.GetElementType().Name == nameof(Byte))
                {
                    typeDeclaration = "string";
                    return true;
                }
            }
            typeDeclaration = null;
            return false;
        }

        private static bool TryGetModelReferencePropertyTypeDeclaration(PropertyInfo property, out string typeDeclaration)
        {
            if (property.IsModelReference())
            {
                var type = property.PropertyType;
                if (type.IsEnumerable())
                {
                    var actualType = type.GetEnumerableType();
                    typeDeclaration = actualType.IsExportedToTypescript() ? $"{actualType.Name}[]" : "any";
                }
                else
                    typeDeclaration = type.IsExportedToTypescript() ? type.Name : "any";

                return true;
            }
            typeDeclaration = null;
            return false;
        }

        private static bool TryGetNormalizerIdPropertyTypeDeclaration(PropertyInfo property, out string typeDeclaration)
        {
            if (property.IsNormalizerId())
            {
                typeDeclaration = property.DeclaringType.GetReferencedTypeName();
                return true;
            }
            typeDeclaration = null;
            return false;
        }

        private static bool TryGetNormalizerIdReferencePropertyTypeDeclaration(PropertyInfo property, out string typeDeclaration)
        {
            if (property.IsNormalizerIdReference())
            {
                var referencedType = property.GetNormalizerIdReferencedType();
                if (property.PropertyType.IsEnumerable())
                {
                    typeDeclaration = GetArrayDeclarationForType(referencedType);
                    return true;
                }
                typeDeclaration = GetTypeDeclaration(referencedType);
                return true;
            }
            typeDeclaration = null;
            return false;
        }

        private static bool TryGetPrimitiveTypeDeclaration(Type type, out string typeDeclaration)
        {
            if (type.Namespace != "System")
            {
                typeDeclaration = null;
                return false;
            }

            if (type.IsNullable())
            {
                return TryGetPrimitiveTypeDeclaration(type.GetTypeInfo().GetGenericArguments().First(), out typeDeclaration);
            }

            var booleanTypes = new[] { typeof(bool) };
            var numberTypes = new[] { typeof(byte), typeof(short), typeof(int), typeof(long), typeof(float), typeof(double), typeof(decimal) };
            var dateTypes = new[] { typeof(DateTime), typeof(DateTimeOffset) };
            var stringTypes = new[] { typeof(char), typeof(string), typeof(Guid) };

            switch (type)
            {
                case Type booleanType when booleanTypes.Contains(booleanType):
                    typeDeclaration = "boolean";
                    return true;
                case Type numberType when numberTypes.Contains(numberType):
                    typeDeclaration = "number";
                    return true;
                case Type dateType when dateTypes.Contains(dateType):
                    typeDeclaration = "Date";
                    return true;
                case Type stringType when stringTypes.Contains(stringType):
                    typeDeclaration = "string";
                    return true;
                default:
                    typeDeclaration = null;
                    return false;
            }
        }

        private static bool TryGetEnumTypeDeclaration(Type type, out string typeDeclaration)
        {
            if (type.GetTypeInfo().IsEnum)
            {
                typeDeclaration = type.Name;
                return true;
            }
            typeDeclaration = null;
            return false;
        }

        private static bool TryGetDictionaryTypeDeclaration(Type type, out string typeDeclaration)
        {
            if (type.IsDictionary() && !type.GetDictionaryTypes().keyType.IsEnum)
            {
                // This is a generic dictionary type        
                typeDeclaration = GetDictionaryDeclarationForType(type);
                return true;
            }

            // This is not a dictionary type
            typeDeclaration = null;
            return false;
        }

        private static bool TryGetEnumDictionaryTypeDeclaration(Type type, out string typeDeclaration)
        {
            if (type.IsDictionary() && type.GetDictionaryTypes().keyType.IsEnum)
            {
                // This is a dictionary type with an enum key        
                typeDeclaration = GetEnumDictionaryDeclarationForType(type);
                return true;
            }

            // This is not a dictionary type
            typeDeclaration = null;
            return false;
        }

        private static bool TryGetArrayTypeDeclaration(Type type, out string typeDeclaration)
        {
            // Examine the type to determine if it is a generic enumreable type or not
            if (type.IsEnumerable())
            {
                // This is a value enumerable type, we will return the type declaration of the 
                // generic parameter as an array type            
                typeDeclaration = GetArrayDeclarationForType(type.GetEnumerableType());
                return true;
            }

            // This is not a list type
            typeDeclaration = null;
            return false;
        }

        private static string GetArrayDeclarationForType(Type type)
        {
            return string.Format(ArrayDeclarationTemplate, GetTypeDeclaration(type));
        }

        private static string GetDictionaryDeclarationForType(Type type)
        {
            var (keyType, valueType) = type.GetDictionaryTypes();

            return string.Format(DictionaryDeclarationTemplate, GetTypeDeclaration(keyType), GetTypeDeclaration(valueType));
        }

        private static string GetEnumDictionaryDeclarationForType(Type type)
        {
            var (keyType, valueType) = type.GetDictionaryTypes();

            return string.Format(EnumDictionaryDeclarationTemplate, GetTypeDeclaration(keyType), GetTypeDeclaration(valueType));
        }
    }
}
