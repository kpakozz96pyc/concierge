
import { ProcessJobScheduleJobStatus } from "./enums/process-job-schedule-job-status";
import { ProcessJobScheduleJobParameterId } from "./process-job-schedule-job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobScheduleJob {

    static $name = "ProcessJobScheduleJob";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessJobScheduleJob, ALF.Shared.Dto"

    id: string;
    companyId: string;
    processPlanId: string;
    jobScheduleId: string;
    automaticProcessType?: string;
    createdAt: Date;
    parameters: ProcessJobScheduleJobParameterId[] = [];
    title: string;
    description?: string;
    status: ProcessJobScheduleJobStatus;
    lastStatusChangedAt: Date;
    yggdrasilScheduledJobId?: string;
    waitingForJobId?: string;

    constructor(data?: Partial<ProcessJobScheduleJob>) {
        Object.assign(this, data);
    }
}
