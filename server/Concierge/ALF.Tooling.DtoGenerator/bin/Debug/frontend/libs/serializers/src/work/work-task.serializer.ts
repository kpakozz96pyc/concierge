import { WorkTaskContextSerializer } from "./work-task-context.serializer";
import { Serializer } from "@alf/core/models";
import { WorkTask } from "@alf/models/work/work-task";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkTaskSerializer implements Serializer<WorkTask> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkTask
    deserialize(data: any): WorkTask | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changedAt = new Date(copy.changedAt);

        if (copy.deadline !== undefined)
            copy.deadline = new Date(copy.deadline);

        copy.context = (copy.context || []).map(new WorkTaskContextSerializer().deserialize);

        return new WorkTask(copy);
    }

    serialize(entity: WorkTask | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkTask, _forceTypeHint?: boolean): any
    serialize(entity: WorkTask | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WorkTask.typeNameHint : undefined,
            id: entity.id,
            type: entity.type,
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            changedByUserId: entity.changedByUserId,
            changedByUsername: entity.changedByUsername,
            title: entity.title,
            description: entity.description,
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined,
            assignedTo: entity.assignedTo,
            completed: entity.completed,
            context: entity.context
                ? entity.context.map(e => new WorkTaskContextSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
