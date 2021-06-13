
import { RetryAttempt } from "./retry-attempt";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobRetryDetails {

    static $name = "JobRetryDetails";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobRetryDetails, ALF.Shared.Dto"

    failedAttempts: number;
    remainingAttempts: number;
    nextAttemptScheduledAt?: Date;
    remainingRetryAttempts: RetryAttempt[] = [];

    constructor(data?: Partial<JobRetryDetails>) {
        Object.assign(this, data);
    }
}
