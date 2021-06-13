
import { ProcessMilestoneAutoCompleteMode } from "../process/enums/process-milestone-auto-complete-mode";
import { ProcessMilestoneIrrelevanceRule } from "../process/enums/process-milestone-irrelevance-rule";
import { ControlResultSeverity } from "../result/enums/control-result-severity";
import { ProcessTemplateStepId } from "./process-template-step";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateMilestoneId = string;

export class ProcessTemplateMilestone {

    static $name = "ProcessTemplateMilestone";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateMilestone, ALF.Shared.Dto"

    id: ProcessTemplateMilestoneId;
    code: string;
    templateId: string;
    isInherited: boolean;
    declaredInTemplate?: string;
    canRestore: boolean;
    ordering: number;
    steps: ProcessTemplateStepId[] = [];
    previousMilestoneCode?: string;
    title: string;
    description?: string;
    deadlineRule?: string;
    deadlineTimeRule?: string;
    requiredPeriodStateForStart?: string;
    resultsInPeriodState?: string;
    requireMilestoneForCompletion?: string;
    requiresManualApproval?: boolean;
    allowForceComplete?: boolean;
    autoCompleteMode?: ProcessMilestoneAutoCompleteMode;
    canDelete?: boolean;
    canEdit?: boolean;
    isDeleted?: boolean;
    activationDateRule?: string;
    activationTimeRule?: string;
    irrelevanceRule?: ProcessMilestoneIrrelevanceRule;
    checkControlResultsForState?: string;
    failCheckIfControlResultsAreThisLevelOrGreater?: ControlResultSeverity;
    checkControlResultsBeforeMilestoneCompletion?: boolean;
    prerequisiteTemplateMilestoneCodes: string[] = [];

    constructor(data?: Partial<ProcessTemplateMilestone>) {
        Object.assign(this, data);
    }
}
