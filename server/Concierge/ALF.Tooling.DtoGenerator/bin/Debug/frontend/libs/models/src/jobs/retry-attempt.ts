

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetryAttempt {

    static $name = "RetryAttempt";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.RetryAttempt, ALF.Shared.Dto"

    attemptNumber: number;
    hasBeenScheduled: boolean;
    scheduledAt?: Date;
    canBeScheduledAtEarliest: Date;
    canBeScheduledAtLatest: Date;

    constructor(data?: Partial<RetryAttempt>) {
        Object.assign(this, data);
    }
}
