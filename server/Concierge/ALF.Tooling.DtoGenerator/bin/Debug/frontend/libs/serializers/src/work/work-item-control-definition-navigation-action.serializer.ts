import { Serializer } from "@alf/core/models";
import { WorkItemControlDefinitionNavigationAction } from "@alf/models/work/work-item-control-definition-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemControlDefinitionNavigationActionSerializer implements Serializer<WorkItemControlDefinitionNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemControlDefinitionNavigationAction
    deserialize(data: any): WorkItemControlDefinitionNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemControlDefinitionNavigationAction(copy);
    }

    serialize(entity: WorkItemControlDefinitionNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemControlDefinitionNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemControlDefinitionNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            controlDefinitionId: entity.controlDefinitionId
        };
    }
}
