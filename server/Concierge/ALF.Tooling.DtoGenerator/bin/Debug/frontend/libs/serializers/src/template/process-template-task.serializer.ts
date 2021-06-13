import { Serializer } from "@alf/core/models";
import { ProcessTemplateTask } from "@alf/models/template/process-template-task";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateTaskSerializer implements Serializer<ProcessTemplateTask> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateTask
    deserialize(data: any): ProcessTemplateTask | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateTask(copy);
    }

    serialize(entity: ProcessTemplateTask | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateTask, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateTask | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateTask.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            isInherited: entity.isInherited,
            declaredInTemplate: entity.declaredInTemplate,
            canRestore: entity.canRestore,
            ordering: entity.ordering,
            stepCode: entity.stepCode,
            stepId: entity.stepId,
            previousCode: entity.previousCode,
            title: entity.title,
            description: entity.description,
            canDelete: entity.canDelete,
            canEdit: entity.canEdit,
            isDeleted: entity.isDeleted
        };
    }
}
