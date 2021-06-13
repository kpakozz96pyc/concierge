

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessJobScheduleJobParameterId = string;

export class ProcessJobScheduleJobParameter {

    static $name = "ProcessJobScheduleJobParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessJobScheduleJobParameter, ALF.Shared.Dto"

    id: ProcessJobScheduleJobParameterId;
    companyId: string;
    jobScheduleJobId: string;
    parameterName?: string;
    resolveRule?: string;

    constructor(data?: Partial<ProcessJobScheduleJobParameter>) {
        Object.assign(this, data);
    }
}
