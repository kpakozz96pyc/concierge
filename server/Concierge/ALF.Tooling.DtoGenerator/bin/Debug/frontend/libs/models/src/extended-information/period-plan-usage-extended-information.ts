

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanUsageExtendedInformation {

    static $name = "PeriodPlanUsageExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.PeriodPlanUsageExtendedInformation, ALF.Shared.Dto"

    periodPlanId: string;
    useFrom: Date;
    useUntil?: Date;
    isPreview: boolean;

    constructor(data?: Partial<PeriodPlanUsageExtendedInformation>) {
        Object.assign(this, data);
    }
}
