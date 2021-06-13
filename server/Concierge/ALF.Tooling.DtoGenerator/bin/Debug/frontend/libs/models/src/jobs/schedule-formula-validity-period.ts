
import { ScheduleValiditySelectionType } from "./enums/schedule-validity-selection-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduleFormulaValidityPeriod {

    static $name = "ScheduleFormulaValidityPeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.ScheduleFormulaValidityPeriod, ALF.Shared.Dto"

    months: string[] = [];
    weekDays: string[] = [];
    hourNumber?: number;
    hourType?: ScheduleValiditySelectionType;
    dayTimeType?: ScheduleValiditySelectionType;
    fromHour?: number;
    toHour?: number;

    constructor(data?: Partial<ScheduleFormulaValidityPeriod>) {
        Object.assign(this, data);
    }
}
