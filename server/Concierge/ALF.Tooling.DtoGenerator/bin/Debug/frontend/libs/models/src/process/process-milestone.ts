
import { ProcessMilestoneAutoCompleteMode } from "./enums/process-milestone-auto-complete-mode";
import { ProcessMilestoneStatus } from "./enums/process-milestone-status";
import { ProcessMilestoneIrrelevanceRule } from "./enums/process-milestone-irrelevance-rule";
import { ControlResultSeverity } from "../result/enums/control-result-severity";
import { ProcessStepId } from "./process-step";
import { ProcessMilestoneStatusReason } from "./process-milestone-status-reason";
import { ProcessMilestoneFeedback } from "./process-milestone-feedback";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessMilestoneId = string;

export class ProcessMilestone {

    static $name = "ProcessMilestone";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestone, ALF.Shared.Dto"

    id: ProcessMilestoneId;
    companyId: string;
    processPlanId: string;
    templateMilestoneCode?: string;
    templatePreviousMilestoneCode?: string;
    templateId?: string;
    deadlineRule?: string;
    calculatedDeadline: Date;
    requiresManualApproval: boolean;
    allowForceComplete: boolean;
    autoCompleteMode: ProcessMilestoneAutoCompleteMode;
    createdAt: Date;
    requiredPeriodStateForStart?: string;
    resultsInPeriodState?: string;
    irrelevanceRule?: ProcessMilestoneIrrelevanceRule;
    prerequisiteMilestoneIds: string[] = [];
    requireMilestoneForCompletion?: string;
    steps: ProcessStepId[] = [];
    statusReasons: ProcessMilestoneStatusReason[] = [];
    feedback: ProcessMilestoneFeedback[] = [];
    title: string;
    description?: string;
    status: ProcessMilestoneStatus;
    lastStatusChangedAt: Date;
    ordering: number;
    actualActivationDate: Date;
    calculatedActivationDate: Date;
    activationDateRule?: string;
    checkControlResultsForState?: string;
    failCheckIfControlResultsAreThisLevelOrGreater?: ControlResultSeverity;
    checkControlResultsBeforeMilestoneCompletion: boolean;
    isForceUnblocked: boolean;
    isForceSkipped: boolean;
    isForceCompleted: boolean;
    isApproved?: boolean;
    isIrrelevant: boolean;
    deadline: Date;

    constructor(data?: Partial<ProcessMilestone>) {
        Object.assign(this, data);
    }
}
