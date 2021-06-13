
import { ProcessJobStatus } from "../process/enums/process-job-status";
import { ProcessJobEventLogType } from "../process/enums/process-job-event-log-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessJobEventLogId = string;

export class ProcessJobEventLog {

    static $name = "ProcessJobEventLog";
    static typeNameHint = "ALF.Shared.Dto.Models.Logging.ProcessJobEventLog, ALF.Shared.Dto"

    id: ProcessJobEventLogId;
    planId: string;
    companyId?: string;
    changedByUserId?: string;
    changedAt: Date;
    changedByUsername?: string;
    description?: string;
    status: ProcessJobStatus;
    type: ProcessJobEventLogType;
    milestoneId: string;
    stepId: string;
    processJobId: string;
    waitingForJobId?: string;
    errorId?: string;
    errorMessage?: string;

    constructor(data?: Partial<ProcessJobEventLog>) {
        Object.assign(this, data);
    }
}
