
import { ProcessPlanStatus } from "../process/enums/process-plan-status";
import { ProcessPlanEventLogType } from "../process/enums/process-plan-event-log-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessPlanEventLogId = string;

export class ProcessPlanEventLog {

    static $name = "ProcessPlanEventLog";
    static typeNameHint = "ALF.Shared.Dto.Models.Logging.ProcessPlanEventLog, ALF.Shared.Dto"

    id: ProcessPlanEventLogId;
    planId: string;
    companyId?: string;
    changedByUserId?: string;
    changedByUsername?: string;
    changedAt: Date;
    description?: string;
    status: ProcessPlanStatus;
    type: ProcessPlanEventLogType;

    constructor(data?: Partial<ProcessPlanEventLog>) {
        Object.assign(this, data);
    }
}
