
import { ProcessStepStatus } from "../process/enums/process-step-status";
import { ProcessStepEventLogType } from "../process/enums/process-step-event-log-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessStepEventLogId = string;

export class ProcessStepEventLog {

    static $name = "ProcessStepEventLog";
    static typeNameHint = "ALF.Shared.Dto.Models.Logging.ProcessStepEventLog, ALF.Shared.Dto"

    id: ProcessStepEventLogId;
    planId: string;
    companyId?: string;
    changedByUserId?: string;
    changedByUsername?: string;
    changedAt: Date;
    description?: string;
    status: ProcessStepStatus;
    type: ProcessStepEventLogType;
    milestoneId: string;
    stepId: string;

    constructor(data?: Partial<ProcessStepEventLog>) {
        Object.assign(this, data);
    }
}
