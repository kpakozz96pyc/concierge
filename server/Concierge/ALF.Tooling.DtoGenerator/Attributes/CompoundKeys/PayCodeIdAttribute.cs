using System;

namespace ALF.Shared.Dto.Attributes.CompoundKeys
{
    public class PayCodeIdAttribute : Attribute
    {
        public int PaycodeFieldNumber { get; set; }

        public PayCodeIdAttribute(int paycodeNumberFieldNumber)
        {
            PaycodeFieldNumber = paycodeNumberFieldNumber;
        }
    }
}
