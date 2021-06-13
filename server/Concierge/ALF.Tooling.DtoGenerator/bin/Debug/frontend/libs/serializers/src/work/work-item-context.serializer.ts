import { Serializer } from "@alf/core/models";
import { WorkItemContext } from "@alf/models/work/work-item-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemContextSerializer implements Serializer<WorkItemContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemContext
    deserialize(data: any): WorkItemContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.context = (copy.context || []).map(new WorkItemContextSerializer().deserialize);

        return new WorkItemContext(copy);
    }

    serialize(entity: WorkItemContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemContext, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WorkItemContext.typeNameHint : undefined,
            type: entity.type,
            value: entity.value,
            context: entity.context
                ? entity.context.map(e => new WorkItemContextSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
