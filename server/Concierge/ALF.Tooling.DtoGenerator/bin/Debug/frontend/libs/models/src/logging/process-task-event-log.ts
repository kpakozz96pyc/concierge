
import { ProcessTaskStatus } from "../process/enums/process-task-status";
import { ProcessTaskEventLogType } from "../process/enums/process-task-event-log-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTaskEventLogId = string;

export class ProcessTaskEventLog {

    static $name = "ProcessTaskEventLog";
    static typeNameHint = "ALF.Shared.Dto.Models.Logging.ProcessTaskEventLog, ALF.Shared.Dto"

    id: ProcessTaskEventLogId;
    planId: string;
    companyId?: string;
    changedByUserId?: string;
    changedByUsername?: string;
    changedAt: Date;
    description?: string;
    status: ProcessTaskStatus;
    type: ProcessTaskEventLogType;
    milestoneId: string;
    stepId: string;
    taskId: string;

    constructor(data?: Partial<ProcessTaskEventLog>) {
        Object.assign(this, data);
    }
}
