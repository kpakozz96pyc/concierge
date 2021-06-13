

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseEmploymentGroup {

    static $name = "AbsenceCaseEmploymentGroup";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCases.AbsenceCaseEmploymentGroup, ALF.Shared.Dto"

    id?: any;
    calculatedMonthlyIncome?: number;
    overriddenMonthlyIncome?: number;
    calculatedMonthlyReimbursement?: number;
    overriddenMonthlyReimbursement?: number;
    employmentIds: string[] = [];

    constructor(data?: Partial<AbsenceCaseEmploymentGroup>) {
        Object.assign(this, data);
    }
}
