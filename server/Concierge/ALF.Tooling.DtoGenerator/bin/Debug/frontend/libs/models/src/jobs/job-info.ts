
import { JobDisplayStatus } from "./enums/job-display-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type JobInfoId = string;

export class JobInfo {

    static $name = "JobInfo";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobInfo, ALF.Shared.Dto"

    id: JobInfoId;
    jobType?: string;
    currentStatus: JobDisplayStatus;
    statusTimestamp?: Date;
    startTimestamp?: Date;
    orderedByUsername?: string;
    errorId?: string;
    processedTime: any;
    parameters: { [key: string]: string } = {};

    constructor(data?: Partial<JobInfo>) {
        Object.assign(this, data);
    }
}
