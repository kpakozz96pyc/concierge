
import { WorkdayOffsetDirection } from "./enums/workday-offset-direction";
import { DateOffset } from "@alf/models/relative-date/date-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkdayOffset extends DateOffset {

    static $name = "WorkdayOffset";
    static typeNameHint = "ALF.Shared.Dto.Models.RelativeDate.WorkdayOffset, ALF.Shared.Dto"

    direction: WorkdayOffsetDirection;

    constructor(data?: Partial<WorkdayOffset>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkdayOffset.typeNameHint;
    }
}
