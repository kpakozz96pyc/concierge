

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PeriodPlanUsageId = string;

export class PeriodPlanUsage {

    static $name = "PeriodPlanUsage";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.PeriodPlanUsage, ALF.Shared.Dto"

    id: PeriodPlanUsageId;
    periodPlanUsageCode: string;
    companyId: string;
    periodPlanId: string;
    useFrom: Date;
    useUntil?: Date;
    isPreview: boolean;

    constructor(data?: Partial<PeriodPlanUsage>) {
        Object.assign(this, data);
    }
}
