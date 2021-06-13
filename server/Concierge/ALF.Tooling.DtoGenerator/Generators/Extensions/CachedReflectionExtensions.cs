using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Reflection;

namespace ALF.DtoGenerator.Generators.Extensions
{
    public static class CachedReflectionExtensions
    {
        private static ConcurrentDictionary<Type, TypeInfo> GeTypeInfoCache { get; } = new ConcurrentDictionary<Type,TypeInfo>();

        private static ConcurrentDictionary<Type, PropertyInfo[]> GetPropertiesCache { get; } = new ConcurrentDictionary<Type, PropertyInfo[]>();

        private static ConcurrentDictionary<Assembly, Type[]> GetNonEditableFieldTypesCache { get; } = new ConcurrentDictionary<Assembly, Type[]>();

        public static TypeInfo GetTypeInfoWithCache(this Type type) => GeTypeInfoCache.GetOrAdd(type, (t) => t.GetTypeInfo());

        public static PropertyInfo[] GetPropertiesWithCache(this Type type) => GetPropertiesCache.GetOrAdd(type, (t) => t.GetProperties());

        public static Type[] GetNonEditableFieldTypesWithCache(this Assembly assembly) => GetNonEditableFieldTypesCache
            .GetOrAdd(assembly, a => a
                .DefinedTypes
                .Where(t => !t.AsType().IsEditableFields())
                .Select(t => t.AsType())
                .ToArray()
            );
    }
}
