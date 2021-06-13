
import { ProcessTimelineType } from "./enums/process-timeline-type";
import { ProcessTimelineMilestone } from "./process-timeline-milestone";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTimelineId = string;

export class ProcessTimeline {

    static $name = "ProcessTimeline";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessTimeline, ALF.Shared.Dto"

    id: ProcessTimelineId;
    companyId?: string;
    type: ProcessTimelineType;
    title?: string;
    subTitle?: string;
    periodId?: string;
    processPlanId?: string;
    startDate: Date;
    endDate: Date;
    milestones: ProcessTimelineMilestone[] = [];

    constructor(data?: Partial<ProcessTimeline>) {
        Object.assign(this, data);
    }
}
