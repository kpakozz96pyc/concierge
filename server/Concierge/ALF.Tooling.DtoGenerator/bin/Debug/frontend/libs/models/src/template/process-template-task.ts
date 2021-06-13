

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateTaskId = string;

export class ProcessTemplateTask {

    static $name = "ProcessTemplateTask";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateTask, ALF.Shared.Dto"

    id: ProcessTemplateTaskId;
    code: string;
    templateId: string;
    isInherited: boolean;
    declaredInTemplate?: string;
    canRestore: boolean;
    ordering: number;
    stepCode: string;
    stepId: string;
    previousCode?: string;
    title: string;
    description?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    isDeleted?: boolean;

    constructor(data?: Partial<ProcessTemplateTask>) {
        Object.assign(this, data);
    }
}
