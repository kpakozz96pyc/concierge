import { Serializer } from "@alf/core/models";
import { ProcessTemplateStep } from "@alf/models/template/process-template-step";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateStepSerializer implements Serializer<ProcessTemplateStep> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateStep
    deserialize(data: any): ProcessTemplateStep | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateStep(copy);
    }

    serialize(entity: ProcessTemplateStep | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateStep, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateStep | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateStep.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            milestoneCode: entity.milestoneCode,
            milestoneId: entity.milestoneId,
            isInherited: entity.isInherited,
            declaredInTemplate: entity.declaredInTemplate,
            canRestore: entity.canRestore,
            ordering: entity.ordering,
            tasks: entity.tasks,
            jobs: entity.jobs,
            previousStepCode: entity.previousStepCode,
            title: entity.title,
            description: entity.description,
            deadlineFormula: entity.deadlineFormula,
            deadlineTimeFormula: entity.deadlineTimeFormula,
            stepType: entity.stepType,
            requireMilestoneForStart: entity.requireMilestoneForStart,
            requireStepForStart: entity.requireStepForStart,
            canDelete: entity.canDelete,
            canEdit: entity.canEdit,
            canAdd: entity.canAdd,
            isDeleted: entity.isDeleted,
            useMilestoneDeadline: entity.useMilestoneDeadline
        };
    }
}
