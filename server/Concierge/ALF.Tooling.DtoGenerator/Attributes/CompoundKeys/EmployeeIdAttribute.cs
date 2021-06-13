using System;

namespace ALF.Shared.Dto.Attributes.CompoundKeys
{
    public class EmployeeIdAttribute : Attribute
    {
        public int EmployeeNumberFieldNumber { get; set; }

        public EmployeeIdAttribute(int employeeNumberFieldNumber)
        {
            EmployeeNumberFieldNumber = employeeNumberFieldNumber;
        }

    }
}
