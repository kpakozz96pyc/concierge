
import { JobsQueueStatisticsByPriority } from "./jobs-queue-statistics-by-priority";
import { JobStatisticsByType } from "./job-statistics-by-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobsStatistics {

    static $name = "JobsStatistics";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobsStatistics, ALF.Shared.Dto"

    queueStatisticsByPriority: JobsQueueStatisticsByPriority[] = [];
    jobStatisticsByType: JobStatisticsByType[] = [];

    constructor(data?: Partial<JobsStatistics>) {
        Object.assign(this, data);
    }
}
