

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultOverview {

    static $name = "ControlResultOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.SalaryCalculation.ControlResultOverview, ALF.Shared.Dto"

    approvedFailureCount: number;
    unapprovedFailureCount: number;
    approvedWarningCount: number;
    unapprovedWarningCount: number;
    approvedInfoCount: number;
    unapprovedInfoCount: number;

    constructor(data?: Partial<ControlResultOverview>) {
        Object.assign(this, data);
    }
}
