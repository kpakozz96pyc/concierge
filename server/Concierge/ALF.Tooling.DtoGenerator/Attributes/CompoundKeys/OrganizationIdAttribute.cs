using System;
using System.Collections.Generic;
using System.Text;

namespace ALF.Shared.Dto.Attributes.CompoundKeys
{
    public class OrganizationIdAttribute : Attribute
    {
        public int OrganizationCodeFieldNumber { get; }

        public OrganizationIdAttribute(int organizationCodeFieldNumber)
        {
            OrganizationCodeFieldNumber = organizationCodeFieldNumber;
        }
    }
}
