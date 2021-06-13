

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SalaryRecalculationLogCompanyStateId = string;

export class SalaryRecalculationLogCompanyState {

    static $name = "SalaryRecalculationLogCompanyState";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.SalaryRecalculationLogCompanyState, ALF.Shared.Dto"

    id: SalaryRecalculationLogCompanyStateId;
    companyId: string;
    oldestUnhandled?: Date;

    constructor(data?: Partial<SalaryRecalculationLogCompanyState>) {
        Object.assign(this, data);
    }
}
