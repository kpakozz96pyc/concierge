

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimeBasedProcessTemplateUsageExtendedInformation {

    static $name = "TimeBasedProcessTemplateUsageExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.TimeBasedProcessTemplateUsageExtendedInformation, ALF.Shared.Dto"

    processTemplateId: string;
    useFrom: Date;
    useUntil?: Date;
    isPreview: boolean;

    constructor(data?: Partial<TimeBasedProcessTemplateUsageExtendedInformation>) {
        Object.assign(this, data);
    }
}
