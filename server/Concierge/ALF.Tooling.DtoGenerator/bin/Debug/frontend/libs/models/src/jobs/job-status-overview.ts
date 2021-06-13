
import { JobDisplayStatus } from "./enums/job-display-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatusOverview {

    static $name = "JobStatusOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobStatusOverview, ALF.Shared.Dto"

    displayStatus: JobDisplayStatus;
    isDone: boolean;
    progress?: number;

    constructor(data?: Partial<JobStatusOverview>) {
        Object.assign(this, data);
    }
}
