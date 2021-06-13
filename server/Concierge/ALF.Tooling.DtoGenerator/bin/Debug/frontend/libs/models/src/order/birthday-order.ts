

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BirthdayOrder {

    static $name = "BirthdayOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.SpecialOccasion.Order.BirthdayOrder, ALF.Shared.Dto"

    until: Date;
    includeAnyBirthday: boolean;
    includeFiveYearSomething: boolean;
    includeTenYearSomething: boolean;
    onlyIfOlderThan?: number;

    constructor(data?: Partial<BirthdayOrder>) {
        Object.assign(this, data);
    }
}
