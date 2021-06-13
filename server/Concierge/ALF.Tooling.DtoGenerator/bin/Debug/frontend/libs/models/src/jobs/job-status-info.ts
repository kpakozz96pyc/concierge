

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatusInfo {

    static $name = "JobStatusInfo";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobStatusInfo, ALF.Shared.Dto"

    id?: string;
    jobId?: string;
    status?: string;
    timestampUtc: Date;
    processingTime?: any;
    errorMessage?: string;

    constructor(data?: Partial<JobStatusInfo>) {
        Object.assign(this, data);
    }
}
