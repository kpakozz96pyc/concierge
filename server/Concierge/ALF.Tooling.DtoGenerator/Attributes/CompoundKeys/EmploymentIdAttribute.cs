using System;

namespace ALF.Shared.Dto.Attributes.CompoundKeys
{
    public class EmploymentIdAttribute : Attribute
    {
        public int EmploymentNumberFieldNumber { get; set; }
        public int EmploymentSequenceNumberFieldNumber { get; set; }
        public int EmploymentPositionFieldNumber { get; set; }

        public EmploymentIdAttribute(int employmentNumberFieldNumber, int employmentSequenceNumberFieldNumber, int employmentPositionFieldNumber)
        {
            EmploymentNumberFieldNumber = employmentNumberFieldNumber;
            EmploymentSequenceNumberFieldNumber = employmentSequenceNumberFieldNumber;
            EmploymentPositionFieldNumber = employmentPositionFieldNumber;
        }
    }
}
