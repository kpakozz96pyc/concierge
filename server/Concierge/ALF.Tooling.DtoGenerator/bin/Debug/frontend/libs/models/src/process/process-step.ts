
import { ProcessStepType } from "./enums/process-step-type";
import { ProcessStepStatus } from "./enums/process-step-status";
import { ProcessJobId } from "./process-job";
import { ProcessTaskId } from "./process-task";
import { ProcessStepStatusReason } from "./process-step-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessStepId = string;

export class ProcessStep {

    static $name = "ProcessStep";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStep, ALF.Shared.Dto"

    id: ProcessStepId;
    companyId: string;
    processPlanId: string;
    milestoneId?: string;
    templateId?: string;
    templateStepCode?: string;
    templatePreviousStepCode?: string;
    calculatedDeadline: Date;
    deadlineFormula?: string;
    stepType: ProcessStepType;
    requireMilestoneForStart?: string;
    requireStepForStart?: string;
    createdAt: Date;
    jobs: ProcessJobId[] = [];
    tasks: ProcessTaskId[] = [];
    statusReasons: ProcessStepStatusReason[] = [];
    title: string;
    description?: string;
    status: ProcessStepStatus;
    lastStatusChangedAt: Date;
    ordering: number;
    deadlineTimeFormula?: string;
    useMilestoneDeadline?: boolean;
    deadline: Date;

    constructor(data?: Partial<ProcessStep>) {
        Object.assign(this, data);
    }
}
