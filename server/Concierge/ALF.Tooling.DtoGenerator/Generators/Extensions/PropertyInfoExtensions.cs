using System;
using System.Collections.Generic;
using ALF.Shared.Dto.Attributes;
using System.Reflection;

namespace ALF.DtoGenerator.Generators.Extensions
{
    internal static class PropertyInfoExtensions
    {
        public static bool IsModelReference(this PropertyInfo property)
        {
            return property.GetCustomAttribute<ModelReferenceAttribute>() != null;
        }

        public static bool IsNormalizerId(this PropertyInfo property)
        {
            return property.GetCustomAttribute<NormalizerIdAttribute>() != null;
        }

        public static bool IsNormalizerIdReference(this PropertyInfo property)
        {
            return property.GetCustomAttribute<NormalizerIdReferenceAttribute>() != null;
        }

        public static bool IsRequiredProperty(this PropertyInfo property)
        {
            return property.IsNormalizerId() || property.IsNormalizerIdReference() || property.IsRequired() || property.IsCompoundKey();
        }

        public static Type GetNormalizerIdReferencedType(this PropertyInfo property)
        {
            return property.GetCustomAttribute<NormalizerIdReferenceAttribute>()?.ForType;
        }

        private static bool IsRequired(this PropertyInfo property)
        {
            return property.GetCustomAttribute<MakeTypescriptRequiredAttribute>() != null;
        }

        private static bool IsCompoundKey(this PropertyInfo property)
        {
            return property.GetCustomAttribute<CompoundKeyAttribute>() != null;
        }
    }
}
