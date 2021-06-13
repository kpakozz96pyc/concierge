import { Serializer } from "@alf/core/models";
import { ProcessTemplateJobScheduleActiveWhenMilestoneIsActive } from "@alf/models/template/process-template-job-schedule-active-when-milestone-is-active";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobScheduleActiveWhenMilestoneIsActiveSerializer implements Serializer<ProcessTemplateJobScheduleActiveWhenMilestoneIsActive> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateJobScheduleActiveWhenMilestoneIsActive
    deserialize(data: any): ProcessTemplateJobScheduleActiveWhenMilestoneIsActive | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateJobScheduleActiveWhenMilestoneIsActive(copy);
    }

    serialize(entity: ProcessTemplateJobScheduleActiveWhenMilestoneIsActive | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateJobScheduleActiveWhenMilestoneIsActive, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateJobScheduleActiveWhenMilestoneIsActive | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateJobScheduleActiveWhenMilestoneIsActive.typeNameHint : undefined,
            jobScheduleCode: entity.jobScheduleCode,
            templateId: entity.templateId,
            milestoneCode: entity.milestoneCode
        };
    }
}
