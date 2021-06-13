import { Serializer } from "@alf/core/models";
import { ProcessTask } from "@alf/models/process/process-task";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTaskSerializer implements Serializer<ProcessTask> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTask
    deserialize(data: any): ProcessTask | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.lastStatusChangedAt = new Date(copy.lastStatusChangedAt);

        return new ProcessTask(copy);
    }

    serialize(entity: ProcessTask | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTask, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTask | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTask.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            processPlanId: entity.processPlanId,
            stepId: entity.stepId,
            templateId: entity.templateId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            templateTaskCode: entity.templateTaskCode,
            templatePreviousTaskOrJobCode: entity.templatePreviousTaskOrJobCode,
            title: entity.title,
            description: entity.description,
            status: entity.status,
            lastStatusChangedAt: entity.lastStatusChangedAt
                ? entity.lastStatusChangedAt.toISOString()
                : undefined,
            ordering: entity.ordering
        };
    }
}
