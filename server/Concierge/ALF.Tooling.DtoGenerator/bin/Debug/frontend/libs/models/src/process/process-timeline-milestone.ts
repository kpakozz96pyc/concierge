
import { ProcessTimelineMilestoneReferenceType } from "./enums/process-timeline-milestone-reference-type";
import { ProcessMilestoneStatus } from "./enums/process-milestone-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTimelineMilestone {

    static $name = "ProcessTimelineMilestone";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessTimelineMilestone, ALF.Shared.Dto"

    referenceId?: string;
    referenceType: ProcessTimelineMilestoneReferenceType;
    deadline: Date;
    title?: string;
    status: ProcessMilestoneStatus;

    constructor(data?: Partial<ProcessTimelineMilestone>) {
        Object.assign(this, data);
    }
}
