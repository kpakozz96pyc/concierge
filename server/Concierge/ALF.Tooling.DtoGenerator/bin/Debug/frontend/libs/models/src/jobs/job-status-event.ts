
import { JobDisplayStatus } from "./enums/job-display-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatusEvent {

    static $name = "JobStatusEvent";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobStatusEvent, ALF.Shared.Dto"

    when: Date;
    status: JobDisplayStatus;

    constructor(data?: Partial<JobStatusEvent>) {
        Object.assign(this, data);
    }
}
