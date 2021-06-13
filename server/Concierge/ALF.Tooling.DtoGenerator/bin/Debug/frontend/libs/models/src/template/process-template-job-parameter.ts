
import { MetaJobParameterResolveRule } from "../parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobParameter {

    static $name = "ProcessTemplateJobParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateJobParameter, ALF.Shared.Dto"

    id?: string;
    code: string;
    templateId: string;
    jobCode: string;
    parameterId?: string;
    resolveRule?: MetaJobParameterResolveRule;

    constructor(data?: Partial<ProcessTemplateJobParameter>) {
        Object.assign(this, data);
    }
}
