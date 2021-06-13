using ALF.Shared.Dto.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace ALF.DtoGenerator.Generators.Extensions
{
    internal static class TypeExtensions
    {
        public static bool IsExportedToTypescript(this Type type) => type.GetTypeInfoWithCache().GetCustomAttribute<ExportToTypescriptAttribute>() != null;

        public static bool IsUsingDefaultValues(this Type type) => type.GetTypeInfoWithCache().GetCustomAttribute<UsesDefaultValuesAttribute>() != null;

        public static bool IsEditableFields(this Type type) => type.GetTypeInfoWithCache().GetCustomAttribute<EditableFieldsAttribute>() != null;

        public static bool IsNormalizerReferencedType(this Type type) => type.GetPropertiesWithCache().Any(property => property.IsNormalizerId());

        public static bool IsReferencedModelType(this PropertyInfo property) => property.GetCustomAttribute<ModelReferenceAttribute>() != null;

        public static bool TryGetIdFieldTypeName(this Type type, out string idFieldTypeName)
        {
            if (type.IsNormalizerReferencedType())
            {
                idFieldTypeName = $"{type.Name}Id";
                return true;
            }
            idFieldTypeName = null;
            return false;
        }

        public static string GetReferencedTypeName(this Type type)
        {
            if (!type.TryGetIdFieldTypeName(out var classOrIdFieldTypeName))
            {
                if (!type.TryGetCustomClassName(out classOrIdFieldTypeName))
                {
                    classOrIdFieldTypeName = type.IsExportedToTypescript() ? type.Name : "any";
                }
            }

            return classOrIdFieldTypeName;
        }

        public static bool IsNullable(this Type type) => type.IsConstructedGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>);

        public static bool IsEnumerable(this Type type)
        {
            if (!type.IsConstructedGenericType) return false;
            return type.GetGenericTypeDefinition() == typeof(IEnumerable<>) || type.GetTypeInfoWithCache().ImplementedInterfaces.Any(t => t.IsEnumerable());
        }

        public static bool IsDictionary(this Type type)
        {
            if (!type.IsConstructedGenericType) return false;
            return type.GetGenericTypeDefinition() == typeof(IDictionary<,>) || type.GetGenericTypeDefinition() == typeof(Dictionary<,>);
        }

        public static (Type keyType, Type valueType) GetDictionaryTypes(this Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));
            if (!type.IsDictionary()) throw new ArgumentException("Was not given a dictionary type");

            return (type.GetGenericArguments()[0], type.GetGenericArguments()[1]);
        }

        public static Type GetEnumerableType(this Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));
            if (!type.IsEnumerable()) throw new ArgumentException("Was not given a enumerable type");

            return type.GetGenericTypeDefinition() == typeof(Dictionary<,>) ? typeof(KeyValuePair<,>) : type.GenericTypeArguments.First();
        }

        public static Type GetNullableType(this Type type)
        {
            if (type == null) throw new ArgumentNullException(nameof(type));
            if (!type.IsNullable()) throw new ArgumentException("Was not given a nullable type");

            return type.GenericTypeArguments.First();
        }

        public static bool IsBaseObject(this Type type)
        {
            return type.GetTypeInfoWithCache().IsClass && type.Namespace == "System" && type.Name == "Object";
        }

        public static string GetOwnTypeName(this Type type)
        {

            if (!type.TryGetCustomClassName(out string className))
            {
                className = type.Name;
            }

            return className;
        }

        public static string GetSerializerTypeName(this Type type) => $"{type.GetOwnTypeName()}Serializer";

        public static string GetGeneratedNamespace(this Type type) => type.GetTypeInfoWithCache().Namespace.Split('.').Last().ToKebabCase(NamingConvention.PascalCase);

        private static bool TryGetCustomClassName(this Type type, out string customClassName)
        {
            // Does this class have an overridden class name?
            customClassName = type.GetTypeInfoWithCache().GetCustomAttribute<ExportToTypescriptAttribute>()?.CustomName;
            return !string.IsNullOrWhiteSpace(customClassName);
        }

        public static string GetJsonTypeName(this Type type)
        {
            return RemoveAssemblyDetails(type.AssemblyQualifiedName);
        }

        // Code from Newtonsoft JSON (JSON .NET)
        // https://github.com/JamesNK/Newtonsoft.Json/blob/473a7721bd67cca8fef1ecc37da1951a1c180022/Src/Newtonsoft.Json/Utilities/ReflectionUtils.cs
        private static string RemoveAssemblyDetails(string fullyQualifiedTypeName)
        {
            StringBuilder builder = new StringBuilder();

            // loop through the type name and filter out qualified assembly details from nested type names
            bool writingAssemblyName = false;
            bool skippingAssemblyDetails = false;
            for (int i = 0; i < fullyQualifiedTypeName.Length; i++)
            {
                char current = fullyQualifiedTypeName[i];
                switch (current)
                {
                    case '[':
                        writingAssemblyName = false;
                        skippingAssemblyDetails = false;
                        builder.Append(current);
                        break;
                    case ']':
                        writingAssemblyName = false;
                        skippingAssemblyDetails = false;
                        builder.Append(current);
                        break;
                    case ',':
                        if (!writingAssemblyName)
                        {
                            writingAssemblyName = true;
                            builder.Append(current);
                        }
                        else
                        {
                            skippingAssemblyDetails = true;
                        }
                        break;
                    default:
                        if (!skippingAssemblyDetails)
                        {
                            builder.Append(current);
                        }
                        break;
                }
            }

            return builder.ToString();
        }

        public static bool HasInheritedClasses(this Type type)
        {
            return type.GetDirectlyInheritedClasses().Any();
        }

        public static IReadOnlyCollection<Type> GetDirectlyInheritedClasses(this Type type)
        {
            return type.GetTypeInfoWithCache()
                .Assembly
                .GetNonEditableFieldTypesWithCache()
                .Where(t => t.BaseType == type)
                .ToList();
        }

        public static IReadOnlyCollection<Type> GetAllInheritedClasses(this Type type)
        {
            var allInheritedClasses = new List<Type>();

            var directlyInheritedClasses = type.GetDirectlyInheritedClasses();

            allInheritedClasses.AddRange(directlyInheritedClasses);

            foreach(var directlyInheritedClass in directlyInheritedClasses)
            {
                allInheritedClasses.AddRange(directlyInheritedClass.GetAllInheritedClasses());
            }

            return allInheritedClasses;
        }
    }
}
