import { WorkItemWorkTaskEditActionSerializer } from "./work-item-work-task-edit-action.serializer";
import { WorkItemWorkTaskEditAction } from "@alf/models/work/work-item-work-task-edit-action";
import { Serializer } from "@alf/core/models";
import { WorkItemEditAction } from "@alf/models/work/work-item-edit-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemEditActionSerializer implements Serializer<WorkItemEditAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemEditAction
    deserialize(data: any): WorkItemEditAction | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemWorkTaskEditAction, ALF.Shared.Dto")
            return new WorkItemWorkTaskEditActionSerializer().deserialize(data);

        throw new Error("Unable to deserialize WorkItemEditAction, cannot infer type from " + data.$type);
    }

    serialize(entity: WorkItemEditAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemEditAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemEditAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemWorkTaskEditAction, ALF.Shared.Dto")
            return new WorkItemWorkTaskEditActionSerializer().serialize(entity as WorkItemWorkTaskEditAction, _forceTypeHint);

        throw new Error("Unable to serialize WorkItemEditAction, cannot infer type from " + entity.$type);
    }
}
