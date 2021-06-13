import { ProcessTemplateJobScheduleActiveWhenMilestoneIsActiveSerializer } from "./process-template-job-schedule-active-when-milestone-is-active.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessTemplateJobSchedule } from "@alf/models/template/process-template-job-schedule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateJobScheduleSerializer implements Serializer<ProcessTemplateJobSchedule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateJobSchedule
    deserialize(data: any): ProcessTemplateJobSchedule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.activeWhileMilestonesAreActive = (copy.activeWhileMilestonesAreActive || []).map(new ProcessTemplateJobScheduleActiveWhenMilestoneIsActiveSerializer().deserialize);

        return new ProcessTemplateJobSchedule(copy);
    }

    serialize(entity: ProcessTemplateJobSchedule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateJobSchedule, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateJobSchedule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateJobSchedule.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            jobs: entity.jobs,
            activeWhileMilestonesAreActive: entity.activeWhileMilestonesAreActive
                ? entity.activeWhileMilestonesAreActive.map(e => new ProcessTemplateJobScheduleActiveWhenMilestoneIsActiveSerializer().serialize(e, _forceTypeHint))
                : undefined,
            jobScheduleFormula: entity.jobScheduleFormula,
            title: entity.title,
            description: entity.description,
            canDelete: entity.canDelete,
            canEdit: entity.canEdit,
            isDeleted: entity.isDeleted
        };
    }
}
