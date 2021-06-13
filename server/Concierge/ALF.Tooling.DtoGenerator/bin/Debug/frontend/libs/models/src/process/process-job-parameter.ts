

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessJobParameterId = string;

export class ProcessJobParameter {

    static $name = "ProcessJobParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessJobParameter, ALF.Shared.Dto"

    id: ProcessJobParameterId;
    companyId: string;
    processPlanId: string;
    jobId: string;
    parameterId?: string;
    templateId?: string;
    resolveRule?: string;

    constructor(data?: Partial<ProcessJobParameter>) {
        Object.assign(this, data);
    }
}
