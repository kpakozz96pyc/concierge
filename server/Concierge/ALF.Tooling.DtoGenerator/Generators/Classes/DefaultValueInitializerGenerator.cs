using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace ALF.DtoGenerator.Generators.Classes
{
    internal class DefaultValueInitializerGenerator
    {
        private const string InitializerFunctionTemplate = @"function initializeDefaultValues(value: {0}): {0} {{
    const model = new {0}(value);
{1}
    return model;
}}";

        private const string InitializerTemplate = @"    ([
{0}
    ] as PropertiesOfType<{2}, {3}>[]).forEach({1});";

        private const string InitializerForNonNullableNumber = @"key => model[key] = (model[key] || 0) as never";
        private const string InitializerForNonNullableBool = @"key => model[key] = model[key] || false";

        private const string IndentOne= "    ";
        private const string IndentTwo = "        ";
        private const string DoubleQuote = "\"";

        public static string GenerateDefaultValueInitializer(Type type)
        {
            return SurroundWith(string.Format(InitializerFunctionTemplate, type.GetOwnTypeName(), GenerateInitializers(type)), Environment.NewLine);
        }

        public static string GenerateInitializers(Type type)
        {
            var initializers = new List<string>
            {
                GenerateNumberInitializers(type),
                GenerateBoolInitializers(type),
                GenerateEnumInitializers(type)
            }.Where(x => x != null);
            return string.Join(Environment.NewLine + Environment.NewLine, initializers);
        }

        private static string GenerateNumberInitializers(Type type)
        {
            var properties = type.GetProperties().Where(p => p.PropertyType == typeof(int) && p.GetCustomAttribute<DoNotSetToDefaultInTypescriptAttribute>() == null);
            return GenerateInitializer(type, properties, InitializerForNonNullableNumber, "number");
        }

        private static string GenerateBoolInitializers(Type type)
        {
            var properties = type.GetProperties().Where(p => p.PropertyType == typeof(bool));
            return GenerateInitializer(type, properties, InitializerForNonNullableBool, "boolean");
        }

        private static string GenerateEnumInitializers(Type type)
        {
            var properties = type.GetProperties().Where(p => p.PropertyType.IsEnum);
            var statements = properties.Select(p => $"{IndentOne}model.{p.Name.ToResolvedJsonName()} = model.{p.Name.ToResolvedJsonName()} || {p.PropertyType.GetOwnTypeName()}.{p.PropertyType.GetDefaultValue()};");
            return string.Join(Environment.NewLine, statements);
        }

        private static string GenerateInitializer(Type type, IEnumerable<PropertyInfo> properties, string initializer, string typeName)
        {
            return properties.Any()
                ? string.Format(InitializerTemplate, GenerateArrayOfPropertyNames(properties), initializer, type.GetOwnTypeName(), typeName)
                : null;
        }

        private static string GenerateArrayOfPropertyNames(IEnumerable<PropertyInfo> properties)
        {
            var templatedProperties = properties.Select(p => p.Name.ToResolvedJsonName()).Select(p => $"{IndentTwo}{SurroundWith(p, DoubleQuote)}").ToList();
            return string.Join($",{Environment.NewLine}", templatedProperties);
        }

        private static string SurroundWith(string valueToBeSurrounded, string surroundWith)
        {
            return $"{surroundWith}{valueToBeSurrounded}{surroundWith}";
        }
    }
}