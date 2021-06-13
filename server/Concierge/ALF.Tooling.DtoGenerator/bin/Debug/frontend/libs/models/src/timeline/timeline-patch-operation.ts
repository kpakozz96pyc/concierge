
import { TimelinePatchOperationType } from "./enums/timeline-patch-operation-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimelinePatchOperation {

    static $name = "TimelinePatchOperation";
    static typeNameHint = "ALF.Shared.Dto.Models.Timeline.TimelinePatchOperation, ALF.Shared.Dto"

    operationType: TimelinePatchOperationType;
    date: Date;
    value?: string;

    constructor(data?: Partial<TimelinePatchOperation>) {
        Object.assign(this, data);
    }
}
