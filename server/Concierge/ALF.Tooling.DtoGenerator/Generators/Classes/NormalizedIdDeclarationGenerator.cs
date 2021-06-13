using ALF.DtoGenerator.Generators.Extensions;
using System;

namespace ALF.DtoGenerator.Generators.Classes
{
    public class NormalizedIdDeclarationGenerator
    {
        public static string GenerateNormalizedIdDeclaration(Type type)
        {
            return type.TryGetIdFieldTypeName(out string idTypeFieldName) ? $"export type {idTypeFieldName} = string;{Environment.NewLine}{Environment.NewLine}" : string.Empty;
        }        
    }
}
