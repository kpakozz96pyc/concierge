
import { ProcessTemplateJobParameter } from "./process-template-job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateJobId = string;

export class ProcessTemplateJob {

    static $name = "ProcessTemplateJob";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateJob, ALF.Shared.Dto"

    id: ProcessTemplateJobId;
    code: string;
    templateId: string;
    stepCode: string;
    stepId: string;
    isInherited: boolean;
    declaredInTemplate?: string;
    canRestore: boolean;
    ordering: number;
    previousCode?: string;
    title?: string;
    description?: string;
    automaticProcessType?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    isDeleted?: boolean;
    parameters: ProcessTemplateJobParameter[] = [];

    constructor(data?: Partial<ProcessTemplateJob>) {
        Object.assign(this, data);
    }
}
