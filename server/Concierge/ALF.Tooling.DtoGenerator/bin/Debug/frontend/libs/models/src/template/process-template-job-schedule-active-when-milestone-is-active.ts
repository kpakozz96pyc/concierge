

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobScheduleActiveWhenMilestoneIsActive {

    static $name = "ProcessTemplateJobScheduleActiveWhenMilestoneIsActive";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateJobScheduleActiveWhenMilestoneIsActive, ALF.Shared.Dto"

    jobScheduleCode?: string;
    templateId?: string;
    milestoneCode?: string;

    constructor(data?: Partial<ProcessTemplateJobScheduleActiveWhenMilestoneIsActive>) {
        Object.assign(this, data);
    }
}
