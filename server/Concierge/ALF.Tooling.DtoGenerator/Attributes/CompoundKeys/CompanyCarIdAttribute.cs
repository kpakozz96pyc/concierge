using ALF.Shared.Dto.Helpers.Lonn;
using System;

namespace ALF.Shared.Dto.Attributes.CompoundKeys
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class CompanyCarIdAttribute : Attribute
    {
        public int CompanyCarCodeFieldNumber { get; set; }

        public CompanyCarIdAttribute(int companyCarCodeFieldNumber)
        {
            CompanyCarCodeFieldNumber = companyCarCodeFieldNumber;
        }
    }
}
