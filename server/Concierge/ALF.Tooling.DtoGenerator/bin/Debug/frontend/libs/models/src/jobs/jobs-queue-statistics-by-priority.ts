
import { Priority } from "./enums/priority";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobsQueueStatisticsByPriority {

    static $name = "JobsQueueStatisticsByPriority";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobsQueueStatisticsByPriority, ALF.Shared.Dto"

    id?: string;
    priority: Priority;
    queuedCount: number;
    waitingTime: number;
    oldestJobTime?: Date;
    oldestJobType?: string;
    oldestJobId?: string;
    averageTime: number;

    constructor(data?: Partial<JobsQueueStatisticsByPriority>) {
        Object.assign(this, data);
    }
}
