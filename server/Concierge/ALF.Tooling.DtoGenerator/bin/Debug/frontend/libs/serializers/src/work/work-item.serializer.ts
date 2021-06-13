import { WorkItemContextSerializer } from "./work-item-context.serializer";
import { WorkItemActionSerializer } from "./work-item-action.serializer";
import { WorkItemStackSerializer } from "./work-item-stack.serializer";
import { WorkItemStack } from "@alf/models/work/work-item-stack";
import { Serializer } from "@alf/core/models";
import { WorkItem } from "@alf/models/work/work-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemSerializer implements Serializer<WorkItem> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItem
    deserialize(data: any): WorkItem | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemStack, ALF.Shared.Dto")
            return new WorkItemStackSerializer().deserialize(data);

        const copy = { ...data };
        copy.context = (copy.context || []).map(new WorkItemContextSerializer().deserialize);

        copy.subContext = (copy.subContext || []).map(new WorkItemContextSerializer().deserialize);

        copy.actions = (copy.actions || []).map(new WorkItemActionSerializer().deserialize);

        if (copy.deadline !== undefined)
            copy.deadline = new Date(copy.deadline);

        return new WorkItem(copy);
    }

    serialize(entity: WorkItem | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItem, _forceTypeHint?: boolean): any
    serialize(entity: WorkItem | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemStack, ALF.Shared.Dto")
            return new WorkItemStackSerializer().serialize(entity as WorkItemStack, _forceTypeHint);

        return {
            $type: _forceTypeHint ? WorkItem.typeNameHint : undefined,
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
