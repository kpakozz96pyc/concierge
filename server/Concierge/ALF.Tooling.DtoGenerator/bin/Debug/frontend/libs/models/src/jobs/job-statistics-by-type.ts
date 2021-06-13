

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatisticsByType {

    static $name = "JobStatisticsByType";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobStatisticsByType, ALF.Shared.Dto"

    id?: string;
    jobType?: string;
    queuedCount: number;
    inProgressCount: number;
    failedCount: number;
    completedCount: number;
    totalCount: number;
    totalRunningTime: number;
    minRunningTime: number;
    maxRunningTime: number;
    averageRunningTime: number;

    constructor(data?: Partial<JobStatisticsByType>) {
        Object.assign(this, data);
    }
}
