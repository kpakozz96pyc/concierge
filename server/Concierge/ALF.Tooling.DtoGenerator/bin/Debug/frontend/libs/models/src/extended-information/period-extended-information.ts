

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodExtendedInformation {

    static $name = "PeriodExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.PeriodExtendedInformation, ALF.Shared.Dto"

    index: number;
    status: number;
    state?: string;
    month: number;
    year: number;

    constructor(data?: Partial<PeriodExtendedInformation>) {
        Object.assign(this, data);
    }
}
