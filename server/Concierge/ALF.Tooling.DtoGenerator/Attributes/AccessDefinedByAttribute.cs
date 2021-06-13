using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class AccessDefinedByAttribute : Attribute
    {
        public Type AccessDefinitionType { get; }
        public AccessDefinedByAttribute(Type accessDefinitionType)
        {
            this.AccessDefinitionType = accessDefinitionType;
        }
    }
}
