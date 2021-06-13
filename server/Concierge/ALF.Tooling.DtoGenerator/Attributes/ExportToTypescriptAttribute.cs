using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Enum)]
    public class ExportToTypescriptAttribute : Attribute
    {
        public string CustomName { get; set; }
    }
}
