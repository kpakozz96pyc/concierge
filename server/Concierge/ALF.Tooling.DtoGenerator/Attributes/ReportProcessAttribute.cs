using ALF.Blocks.Enums.EnumAttributes;
using ALF.Shared.Dto.Models.DataAccess;
using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Field)]
    public class ReportProcessAttribute : StringEnumValueAttribute
    {
        public string Description { get; }

        public ReportProcessType ReportProcessType { get; }

        public bool AvailableInPayrollPortal { get; }

        public bool AvailableInCustomerPortal { get; }

        public bool AvailableInManagerPortal { get; }

        public ReportProcessAttribute(string value, string description, ReportProcessType reportProcessType = ReportProcessType.General, bool availableInPayrollPortal = false, bool availableInCustomerPortal = false, bool availableInManagerPortal = false) : base(value)
        {
            Description = description ?? throw new ArgumentNullException(nameof(description));
            ReportProcessType = reportProcessType;
            AvailableInPayrollPortal = availableInPayrollPortal;
            AvailableInCustomerPortal = availableInCustomerPortal;
            AvailableInManagerPortal = availableInManagerPortal;
        }
    }
}
