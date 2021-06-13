using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class SystemParameterCategoryAttribute : Attribute
    {
        public string Code { get; }

        public string Description { get; }

        public SystemParameterCategoryAttribute(string code, string description)
        {
            Code = code;
            Description = description;
        }
    }
}
