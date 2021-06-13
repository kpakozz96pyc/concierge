
import { Priority } from "./enums/priority";
import { JobDisplayStatus } from "./enums/job-display-status";
import { ProcessingStatus } from "./enums/processing-status";
import { OrderType } from "./enums/order-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type JobDetailsId = string;

export class JobDetails {

    static $name = "JobDetails";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobDetails, ALF.Shared.Dto"

    id: JobDetailsId;
    jobType?: string;
    priority: Priority;
    orderedByUsername?: string;
    orderedByUserId?: string;
    status: JobDisplayStatus;
    statusTimestampUtc: Date;
    queuedTimestampUtc: Date;
    isWaitForJob: boolean;
    exceptionBody?: string;
    completionCount: number;
    retryAttempt?: number;
    progress?: number;
    spawnedJobCount: number;
    parameters: { [key: string]: string } = {};
    failedJobId?: string;
    throttlerQueuedTimestampUtc?: Date;
    processingStatus: ProcessingStatus;
    postProcessingStatus: ProcessingStatus;
    postProcessingRetryAttempt?: number;
    recoveryStatus: ProcessingStatus;
    recoveryRetryAttempt?: number;
    waitForJobFailed: boolean;
    waitForJobCancelled: boolean;
    noProcessingRetry: boolean;
    noPostProcessingRetry: boolean;
    noRecoveryRetry: boolean;
    processingFinishedTimestampUtc?: Date;
    processingStartedTimestampUtc?: Date;
    throttlerReceivedTimestampUtc?: Date;
    orderType: OrderType;
    rootJobId?: string;
    parentJobId?: string;
    parentJobIdChain: string[] = [];
    retryingJobId?: string;
    errorId?: string;
    orderedTimestampUtc?: Date;
    isRetryJob: boolean;

    constructor(data?: Partial<JobDetails>) {
        Object.assign(this, data);
    }
}
