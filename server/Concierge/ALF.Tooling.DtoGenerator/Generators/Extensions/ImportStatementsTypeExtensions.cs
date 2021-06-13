using System;
using System.Reflection;
using ALF.Shared.Dto.Attributes;

namespace ALF.DtoGenerator.Generators.Extensions
{
    internal static class ImportStatementsTypeExtensions
    {
        public static string GetImportPathForReferencedClassType(this Type type, Type importedType)
        {
            var prefix = type.Namespace == importedType.Namespace ? "." : $"../{importedType.GetGeneratedNamespace()}";
            var filename = importedType.GetOwnTypeName().ToKebabCase(NamingConvention.PascalCase);
            return $"{prefix}/{filename}";
        }

        public static string GetEnumImportPath(this Type type, Type importedType)
        {
            var prefix = type.Namespace == importedType.Namespace ? "." : $"../{importedType.GetGeneratedNamespace()}";
            var filename = importedType.Name.ToKebabCase(NamingConvention.PascalCase);
            return $"{prefix}/enums/{filename}";
        }

        public static string GetImportPathForSerializer(this Type type, Type importedType)
        {
            var prefix = type.Namespace == importedType.Namespace ? "." : $"../{importedType.GetGeneratedNamespace()}";

            var attribute = importedType.GetCustomAttribute<SerializerGroup>(false);
            var filename = attribute != null ? attribute.Name : importedType.GetOwnTypeName();

            return $"{prefix}/{filename.ToKebabCase(NamingConvention.PascalCase)}.serializer";
        }
    }
}
