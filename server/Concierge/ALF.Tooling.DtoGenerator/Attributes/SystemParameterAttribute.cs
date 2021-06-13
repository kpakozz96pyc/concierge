using ALF.Shared.Dto.Models.SystemParameters;
using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Property)]
    public class SystemParameterAttribute : Attribute
    {
        public string Name { get; }

        public SystemParameterDataType DataType { get;  }

        public SystemParameterAttribute(string name, SystemParameterDataType dataType)
        {
            Name = name;
            DataType = dataType;
        }
    }
}
