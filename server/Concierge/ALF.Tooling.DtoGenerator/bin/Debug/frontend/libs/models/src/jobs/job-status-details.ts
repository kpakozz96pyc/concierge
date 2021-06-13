
import { JobDisplayStatus } from "./enums/job-display-status";
import { JobRetryDetails } from "./job-retry-details";
import { JobStatusEvent } from "./job-status-event";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type JobStatusDetailsId = string;

export class JobStatusDetails {

    static $name = "JobStatusDetails";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobStatusDetails, ALF.Shared.Dto"

    id: JobStatusDetailsId;
    jobId?: string;
    jobType?: string;
    jobDescription?: string;
    retryDetails?: JobRetryDetails;
    currentStatus: JobDisplayStatus;
    currentStatusDetails?: string;
    progress?: number;
    statusEvents: JobStatusEvent[] = [];

    constructor(data?: Partial<JobStatusDetails>) {
        Object.assign(this, data);
    }
}
