

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TimelineInfoId = string;

export class TimelineInfo {

    static $name = "TimelineInfo";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.TimelineInfo, ALF.Shared.Dto"

    id: TimelineInfoId;
    entityId: string;
    fieldId: string;
    modelType?: string;
    currentValueStartDate?: Date;
    lastValueStartDate?: Date;
    hasFutureChanges: boolean;

    constructor(data?: Partial<TimelineInfo>) {
        Object.assign(this, data);
    }
}
