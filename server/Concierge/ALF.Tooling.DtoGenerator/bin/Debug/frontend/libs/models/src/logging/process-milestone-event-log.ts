
import { ProcessMilestoneStatus } from "../process/enums/process-milestone-status";
import { ProcessMilestoneEventLogType } from "../process/enums/process-milestone-event-log-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessMilestoneEventLogId = string;

export class ProcessMilestoneEventLog {

    static $name = "ProcessMilestoneEventLog";
    static typeNameHint = "ALF.Shared.Dto.Models.Logging.ProcessMilestoneEventLog, ALF.Shared.Dto"

    id: ProcessMilestoneEventLogId;
    planId: string;
    companyId?: string;
    changedByUserId?: string;
    changedAt: Date;
    changedByUsername?: string;
    description?: string;
    status: ProcessMilestoneStatus;
    type: ProcessMilestoneEventLogType;
    milestoneId: string;

    constructor(data?: Partial<ProcessMilestoneEventLog>) {
        Object.assign(this, data);
    }
}
