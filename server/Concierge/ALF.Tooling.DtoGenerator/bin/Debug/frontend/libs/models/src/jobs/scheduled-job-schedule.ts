
import { ScheduledJobScheduleModel } from "./scheduled-job-schedule-model";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduledJobSchedule {

    static $name = "ScheduledJobSchedule";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.ScheduledJobSchedule, ALF.Shared.Dto"

    formula?: string;
    nextRuns: Date[] = [];
    isFormRepresented: boolean;
    model?: ScheduledJobScheduleModel;

    constructor(data?: Partial<ScheduledJobSchedule>) {
        Object.assign(this, data);
    }
}
