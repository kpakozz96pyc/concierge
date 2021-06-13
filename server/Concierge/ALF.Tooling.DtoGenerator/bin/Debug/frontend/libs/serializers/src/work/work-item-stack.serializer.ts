import { WorkItemStackType } from "@alf/models/work/enums/work-item-stack-type";
import { WorkItemContextSerializer } from "./work-item-context.serializer";
import { WorkItemActionSerializer } from "./work-item-action.serializer";
import { Serializer } from "@alf/core/models";
import { WorkItemStack } from "@alf/models/work/work-item-stack";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemStackSerializer implements Serializer<WorkItemStack> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemStack
    deserialize(data: any): WorkItemStack | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.stackType = WorkItemStackType[copy.stackType];

        copy.context = (copy.context || []).map(new WorkItemContextSerializer().deserialize);

        copy.subContext = (copy.subContext || []).map(new WorkItemContextSerializer().deserialize);

        copy.actions = (copy.actions || []).map(new WorkItemActionSerializer().deserialize);

        if (copy.deadline !== undefined)
            copy.deadline = new Date(copy.deadline);

        return new WorkItemStack(copy);
    }

    serialize(entity: WorkItemStack | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemStack, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemStack | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            stackType: WorkItemStackType[entity.stackType],
            count: entity.count,
            id: entity.id,
            type: entity.type,
            entityId: entity.entityId,
            categoryTitle: entity.categoryTitle,
            title: entity.title,
            description: entity.description,
            context: entity.context
                ? entity.context.map(e => new WorkItemContextSerializer().serialize(e, _forceTypeHint))
                : undefined,
            subContext: entity.subContext
                ? entity.subContext.map(e => new WorkItemContextSerializer().serialize(e, _forceTypeHint))
                : undefined,
            actions: entity.actions
                ? entity.actions.map(e => new WorkItemActionSerializer().serialize(e, _forceTypeHint))
                : undefined,
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined,
            assignedTo: entity.assignedTo,
            hashedValue: entity.hashedValue
        };
    }
}
