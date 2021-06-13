using ALF.Blocks.Enums.EnumAttributes;
using ALF.Shared.Dto.Models.DataAccess;
using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Field)]
    public sealed class ProcessAttribute : StringEnumValueAttribute
    {
        public ProcessLevel ProcessLevel { get; }

        public string Description { get; }

        public ProcessAttribute(ProcessLevel processLevel, string value, string description) : base(value)
        {
            ProcessLevel = processLevel;
            Description = description ?? throw new ArgumentNullException(nameof(description));
        }
    }
}
