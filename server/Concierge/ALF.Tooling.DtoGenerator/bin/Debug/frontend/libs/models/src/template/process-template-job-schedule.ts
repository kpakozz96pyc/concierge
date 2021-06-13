
import { ProcessTemplateJobScheduleJobId } from "./process-template-job-schedule-job";
import { ProcessTemplateJobScheduleActiveWhenMilestoneIsActive } from "./process-template-job-schedule-active-when-milestone-is-active";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateJobScheduleId = string;

export class ProcessTemplateJobSchedule {

    static $name = "ProcessTemplateJobSchedule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateJobSchedule, ALF.Shared.Dto"

    id: ProcessTemplateJobScheduleId;
    code: string;
    templateId: string;
    jobs: ProcessTemplateJobScheduleJobId[] = [];
    activeWhileMilestonesAreActive: ProcessTemplateJobScheduleActiveWhenMilestoneIsActive[] = [];
    jobScheduleFormula?: string;
    title: string;
    description?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    isDeleted?: boolean;

    constructor(data?: Partial<ProcessTemplateJobSchedule>) {
        Object.assign(this, data);
    }
}
