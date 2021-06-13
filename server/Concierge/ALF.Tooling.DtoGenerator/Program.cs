using ALF.DtoGenerator.Generators;
using ALF.DtoGenerator.Generators.Classes;
using ALF.DtoGenerator.Generators.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ALF.DtoGenerator
{
    public class Program
    {
        private static readonly DirectoryInfo OutputPath = new DirectoryInfo(@"../libs/models/src");
        private static readonly DirectoryInfo SerializerOutputPath = new DirectoryInfo(@"../libs/serializers/src");
        private const string RootNamespace = "Concierge.Core";

        public static void Main(string[] args)
        {
            var types = typeof(Concierge.Core.AssemblyReference).Assembly.ExportedTypes.Where(type => type.AssemblyQualifiedName.Contains(RootNamespace));
            var typesToBeExported = types.Where(type => type.IsExportedToTypescript());

            var groupThreads = typesToBeExported.GroupBy(type => type.GetGeneratedNamespace()).Select(group => Task.Factory.StartNew(() =>
            {
                // Build the required paths
                var classOutputPath = Path.Combine(OutputPath.FullName, group.Key);
                var serializerOutputPath = Path.Combine(SerializerOutputPath.FullName, group.Key);
                var enumOutputPath = Path.Combine(OutputPath.FullName, group.Key, "enums");

                // Find the classes and enums
                var exportableClasses = group.Where(type => type.GetTypeInfoWithCache().IsClass).ToList();
                var exportableEnums = group.Where(type => type.GetTypeInfoWithCache().IsEnum).ToList();

                // Create the required directories if they do not already exist
                Directory.CreateDirectory(OutputPath.FullName);

                if (exportableClasses.Any())
                {
                    Directory.CreateDirectory(classOutputPath);
                    Directory.CreateDirectory(serializerOutputPath);
                }

                if (exportableEnums.Any())
                    Directory.CreateDirectory(enumOutputPath);

                // Process and write the class definition files
                foreach (var classType in exportableClasses)
                    WriteClassDefinitionFile(classType, classOutputPath);

                // Process and write the enum definition files
                foreach (var enumType in exportableEnums)
                {
                    WriteEnumDefinitionFile(enumType, enumOutputPath);
                }

                // Build the container file that will re-export all the items contained within this namespace
                WriteReExporterFile(OutputPath, group.Key, exportableClasses, exportableEnums);
            })).ToArray();
            Task.WaitAll(groupThreads);
        }

        private static void WriteClassDefinitionFile(Type type, string classOutputPath)
        {
            var definition = ClassTypescriptGenerator.GenerateTypescriptClassDefinition(type);
            var filename = type.Name.ToKebabCase(NamingConvention.PascalCase) + ".ts";

            // Write the class definition data to a typescript file, overwriting any existing file if it exists
            var path = Path.Combine(classOutputPath, filename);

            if (!File.Exists(path) || definition != File.ReadAllText(path, Encoding.UTF8))
                File.WriteAllText(path, definition, Encoding.UTF8);
        }

        private static void WriteSerializerDefinitionFile(Type type, string classOutputPath)
        {
            var definition = SerializerTypescriptGenerator.GenerateDefinition(type);
            var filename = type.Name.ToKebabCase(NamingConvention.PascalCase) + ".serializer.ts";

            // Write the class definition data to a typescript file, overwriting any existing file if it exists
            var path = Path.Combine(classOutputPath, filename);

            if (!File.Exists(path) || definition != File.ReadAllText(path, Encoding.UTF8))
                File.WriteAllText(path, definition, Encoding.UTF8);
        }

        private static void WriteEnumDefinitionFile(Type type, string enumOutputPath)
        {
            var definition = EnumTypescriptGenerator.GenerateTypescriptFileDefinitionForEnum(type);
            var filename = type.Name.ToKebabCase(NamingConvention.PascalCase) + ".ts";

            // Write the enum definition data to a typescript file, overwriting any existing file if it exists
            var path = Path.Combine(enumOutputPath, filename);

            if (!File.Exists(path) || definition != File.ReadAllText(path, Encoding.UTF8))
                File.WriteAllText(path, definition, Encoding.UTF8);
        }

        private static void WriteReExporterFile(DirectoryInfo outputPath, string namespaceName, IEnumerable<Type> classTypes, IEnumerable<Type> enumTypes)
        {
            var reExporterFileDataBuilder = new StringBuilder();

            // Build the file data
            reExporterFileDataBuilder.AppendLine(string.Join(Environment.NewLine, classTypes.Select(ImportStatementsGenerator.GetExportStatementForClass)));
            reExporterFileDataBuilder.AppendLine(string.Join(Environment.NewLine, enumTypes.Select(ImportStatementsGenerator.GetExportStatementForEnum)));

            var content = reExporterFileDataBuilder.ToString().Trim(Environment.NewLine.ToCharArray()) + Environment.NewLine;

            // Determine the filename for this file
            var reExporterFilename = namespaceName.ToKebabCase(NamingConvention.PascalCase) + ".ts";

            // Write the re-exporter file definition data to a typescript file, overwriting any existing file if it exists
            var path = Path.Combine(outputPath.FullName, reExporterFilename);

            if (!File.Exists(path) || content != File.ReadAllText(path, Encoding.UTF8))
                File.WriteAllText(path, content, Encoding.UTF8);
        }
    }
}
