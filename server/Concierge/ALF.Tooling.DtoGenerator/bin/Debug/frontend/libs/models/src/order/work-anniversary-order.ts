

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkAnniversaryOrder {

    static $name = "WorkAnniversaryOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.SpecialOccasion.Order.WorkAnniversaryOrder, ALF.Shared.Dto"

    until: Date;
    includeFiveYearAnniversary: boolean;
    includeTenYearAnniversary: boolean;
    onlyIfWorkedAtLeastNumberOfYears?: number;

    constructor(data?: Partial<WorkAnniversaryOrder>) {
        Object.assign(this, data);
    }
}
