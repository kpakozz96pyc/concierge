import { Serializer } from "@alf/core/models";
import { WorkItemWorkTaskEditAction } from "@alf/models/work/work-item-work-task-edit-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemWorkTaskEditActionSerializer implements Serializer<WorkItemWorkTaskEditAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemWorkTaskEditAction
    deserialize(data: any): WorkItemWorkTaskEditAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemWorkTaskEditAction(copy);
    }

    serialize(entity: WorkItemWorkTaskEditAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemWorkTaskEditAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemWorkTaskEditAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            workTaskId: entity.workTaskId
        };
    }
}
