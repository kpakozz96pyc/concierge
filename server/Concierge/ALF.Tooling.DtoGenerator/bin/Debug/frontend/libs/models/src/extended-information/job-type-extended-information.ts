
import { JobParameter } from "../job-parameters/job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobTypeExtendedInformation {

    static $name = "JobTypeExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.JobTypeExtendedInformation, ALF.Shared.Dto"

    jobParameters: JobParameter[] = [];

    constructor(data?: Partial<JobTypeExtendedInformation>) {
        Object.assign(this, data);
    }
}
