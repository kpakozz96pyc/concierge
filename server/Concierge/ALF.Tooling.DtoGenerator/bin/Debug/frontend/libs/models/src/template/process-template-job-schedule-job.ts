
import { ProcessTemplateJobScheduleJobParameter } from "./process-template-job-schedule-job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateJobScheduleJobId = string;

export class ProcessTemplateJobScheduleJob {

    static $name = "ProcessTemplateJobScheduleJob";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateJobScheduleJob, ALF.Shared.Dto"

    id: ProcessTemplateJobScheduleJobId;
    code: string;
    templateId: string;
    jobScheduleCode: string;
    title: string;
    description?: string;
    automaticProcessType?: string;
    parameters: ProcessTemplateJobScheduleJobParameter[] = [];

    constructor(data?: Partial<ProcessTemplateJobScheduleJob>) {
        Object.assign(this, data);
    }
}
