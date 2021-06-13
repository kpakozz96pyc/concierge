
import { JobScheduleFormulaFrequencyType } from "./enums/job-schedule-formula-frequency-type";
import { ScheduleFormulaValidityPeriod } from "./schedule-formula-validity-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduledJobScheduleModel {

    static $name = "ScheduledJobScheduleModel";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.ScheduledJobScheduleModel, ALF.Shared.Dto"

    frequency?: JobScheduleFormulaFrequencyType;
    date?: Date;
    day?: number;
    weekDay?: number;
    month?: number;
    ordinalDay?: number;
    time?: string;
    minutes?: number;
    staggerPeriod?: number;
    validityPeriod?: ScheduleFormulaValidityPeriod;

    constructor(data?: Partial<ScheduledJobScheduleModel>) {
        Object.assign(this, data);
    }
}
