using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class NormalizerIdReferenceAttribute : Attribute
    {
        public Type ForType { get; }

        public NormalizerIdReferenceAttribute(Type forType)
        {
            ForType = forType;
        }
        
    }
}
