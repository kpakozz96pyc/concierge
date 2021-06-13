
import { ProcessType } from "./enums/process-type";
import { ProcessPlanStatus } from "./enums/process-plan-status";
import { ProcessCycleTimeUnit } from "./enums/process-cycle-time-unit";
import { ProcessManualAction } from "./enums/process-manual-action";
import { ProcessMilestoneId } from "./process-milestone";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessPlanId = string;

export class ProcessPlan {

    static $name = "ProcessPlan";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessPlan, ALF.Shared.Dto"

    id: ProcessPlanId;
    companyId: string;
    templateId?: string;
    periodId?: string;
    controlResultsId?: string;
    periodNumber?: number;
    createdAt: Date;
    recurrenceDate?: Date;
    startDate: Date;
    endDate: Date;
    intervalType?: ProcessCycleTimeUnit;
    intervalLength?: number;
    processType: ProcessType;
    tags: string[] = [];
    earliestStartDate?: Date;
    latestStartDate?: Date;
    startDateRule?: string;
    createDateRule?: string;
    createStartedAt: Date;
    isBeingCreatedByJobId?: string;
    cycleStartDate?: Date;
    cycleEndDate?: Date;
    intervalStartDate?: Date;
    intervalEndDate?: Date;
    milestones: ProcessMilestoneId[] = [];
    title: string;
    description?: string;
    status: ProcessPlanStatus;
    lastStatusChangedAt: Date;
    nextEventScheduledJobId?: string;
    isForceSkipped: boolean;
    manualActionNeeded?: ProcessManualAction;
    manualActionDeadline?: Date;
    isGarbageCollected: boolean;
    isBeingCreated: boolean;

    constructor(data?: Partial<ProcessPlan>) {
        Object.assign(this, data);
    }
}
