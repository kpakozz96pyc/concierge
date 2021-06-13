
import { BaseDate } from "./enums/base-date";
import { DateOffset } from "./date-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RelativeDateFormula {

    static $name = "RelativeDateFormula";
    static typeNameHint = "ALF.Shared.Dto.Models.RelativeDate.RelativeDateFormula, ALF.Shared.Dto"

    $type: string;
    baseDate: BaseDate;
    offsets: DateOffset[] = [];

    constructor(data?: Partial<RelativeDateFormula>) {
        Object.assign(this, data);
    }
}
