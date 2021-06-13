
import { ProcessTemplateStepType } from "./enums/process-template-step-type";
import { ProcessTemplateTaskId } from "./process-template-task";
import { ProcessTemplateJobId } from "./process-template-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateStepId = string;

export class ProcessTemplateStep {

    static $name = "ProcessTemplateStep";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateStep, ALF.Shared.Dto"

    id: ProcessTemplateStepId;
    code: string;
    templateId: string;
    milestoneCode: string;
    milestoneId: string;
    isInherited: boolean;
    declaredInTemplate?: string;
    canRestore: boolean;
    ordering: number;
    tasks: ProcessTemplateTaskId[] = [];
    jobs: ProcessTemplateJobId[] = [];
    previousStepCode?: string;
    title: string;
    description?: string;
    deadlineFormula?: string;
    deadlineTimeFormula?: string;
    stepType?: ProcessTemplateStepType;
    requireMilestoneForStart?: string;
    requireStepForStart?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    canAdd?: boolean;
    isDeleted?: boolean;
    useMilestoneDeadline?: boolean;

    constructor(data?: Partial<ProcessTemplateStep>) {
        Object.assign(this, data);
    }
}
