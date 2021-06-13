

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TimeBasedProcessTemplateUsageId = string;

export class TimeBasedProcessTemplateUsage {

    static $name = "TimeBasedProcessTemplateUsage";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.TimeBasedProcessTemplateUsage, ALF.Shared.Dto"

    id: TimeBasedProcessTemplateUsageId;
    processTemplateUsageCode: string;
    companyId: string;
    processTemplateId: string;
    useFrom: Date;
    useUntil?: Date;
    isPreview: boolean;

    constructor(data?: Partial<TimeBasedProcessTemplateUsage>) {
        Object.assign(this, data);
    }
}
