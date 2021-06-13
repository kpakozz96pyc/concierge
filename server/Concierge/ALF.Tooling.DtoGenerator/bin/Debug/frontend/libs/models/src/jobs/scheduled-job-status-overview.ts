

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ScheduledJobStatusOverviewId = string;

export class ScheduledJobStatusOverview {

    static $name = "ScheduledJobStatusOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.ScheduledJobStatusOverview, ALF.Shared.Dto"

    id: ScheduledJobStatusOverviewId;
    nextRunTime: Date;
    jobId?: string;

    constructor(data?: Partial<ScheduledJobStatusOverview>) {
        Object.assign(this, data);
    }
}
