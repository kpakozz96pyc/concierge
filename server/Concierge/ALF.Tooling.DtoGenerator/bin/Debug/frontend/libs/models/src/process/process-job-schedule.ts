
import { ProcessJobScheduleStatus } from "./enums/process-job-schedule-status";
import { ProcessJobScheduleJob } from "./process-job-schedule-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessJobScheduleId = string;

export class ProcessJobSchedule {

    static $name = "ProcessJobSchedule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessJobSchedule, ALF.Shared.Dto"

    id: ProcessJobScheduleId;
    companyId: string;
    processPlanId: string;
    createdAt: Date;
    activeWhenTheseMilestonesAreActive: string[] = [];
    schedule?: string;
    jobs: ProcessJobScheduleJob[] = [];
    title: string;
    description?: string;
    status: ProcessJobScheduleStatus;
    lastStatusChangedAt: Date;

    constructor(data?: Partial<ProcessJobSchedule>) {
        Object.assign(this, data);
    }
}
