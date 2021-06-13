
import { TimelinePatchOperation } from "./timeline-patch-operation";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimelinePatchDocument {

    static $name = "TimelinePatchDocument";
    static typeNameHint = "ALF.Shared.Dto.Models.Timeline.TimelinePatchDocument, ALF.Shared.Dto"

    operations: TimelinePatchOperation[] = [];

    constructor(data?: Partial<TimelinePatchDocument>) {
        Object.assign(this, data);
    }
}
