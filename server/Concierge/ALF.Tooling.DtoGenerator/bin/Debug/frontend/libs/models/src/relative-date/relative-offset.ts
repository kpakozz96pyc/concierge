
import { RelativeOffsetUnit } from "./enums/relative-offset-unit";
import { DateOffset } from "@alf/models/relative-date/date-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RelativeOffset extends DateOffset {

    static $name = "RelativeOffset";
    static typeNameHint = "ALF.Shared.Dto.Models.RelativeDate.RelativeOffset, ALF.Shared.Dto"

    unit: RelativeOffsetUnit;
    value: number;

    constructor(data?: Partial<RelativeOffset>) {
        super(data);
        Object.assign(this, data);
        this.$type = RelativeOffset.typeNameHint;
    }
}
