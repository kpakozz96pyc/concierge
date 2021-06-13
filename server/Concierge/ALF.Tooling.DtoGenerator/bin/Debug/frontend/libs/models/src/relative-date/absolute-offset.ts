
import { AbsoluteOffsetUnit } from "./enums/absolute-offset-unit";
import { AbsoluteOffsetDirection } from "./enums/absolute-offset-direction";
import { DateOffset } from "@alf/models/relative-date/date-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsoluteOffset extends DateOffset {

    static $name = "AbsoluteOffset";
    static typeNameHint = "ALF.Shared.Dto.Models.RelativeDate.AbsoluteOffset, ALF.Shared.Dto"

    unit: AbsoluteOffsetUnit;
    direction: AbsoluteOffsetDirection;
    value: number;

    constructor(data?: Partial<AbsoluteOffset>) {
        super(data);
        Object.assign(this, data);
        this.$type = AbsoluteOffset.typeNameHint;
    }
}
