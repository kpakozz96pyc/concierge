
import { MetaJobParameterResolveRule } from "../parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobScheduleJobParameter {

    static $name = "ProcessTemplateJobScheduleJobParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateJobScheduleJobParameter, ALF.Shared.Dto"

    id?: string;
    code: string;
    templateId: string;
    jobScheduleJobCode: string;
    parameterId?: string;
    resolveRule?: MetaJobParameterResolveRule;

    constructor(data?: Partial<ProcessTemplateJobScheduleJobParameter>) {
        Object.assign(this, data);
    }
}
