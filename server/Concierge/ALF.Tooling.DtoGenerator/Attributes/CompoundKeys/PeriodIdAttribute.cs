using System;

namespace ALF.Shared.Dto.Attributes.CompoundKeys
{
    public class PeriodIdAttribute : Attribute
    {
        public int PeriodNumberFieldNumber { get; set; }

        public PeriodIdAttribute(int periodNumberFieldNumber)
        {
            this.PeriodNumberFieldNumber = periodNumberFieldNumber;
        }
    }
}
