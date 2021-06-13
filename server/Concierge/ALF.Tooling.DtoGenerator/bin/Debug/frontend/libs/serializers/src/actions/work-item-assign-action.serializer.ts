import { Serializer } from "@alf/core/models";
import { WorkItemAssignAction } from "@alf/models/actions/work-item-assign-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemAssignActionSerializer implements Serializer<WorkItemAssignAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemAssignAction
    deserialize(data: any): WorkItemAssignAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemAssignAction(copy);
    }

    serialize(entity: WorkItemAssignAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemAssignAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemAssignAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WorkItemAssignAction.typeNameHint : undefined,
            id: entity.id,
            userId: entity.userId
        };
    }
}
