import { Serializer } from "@alf/core/models";
import { WorkItemImmediateManagerFormNavigationAction } from "@alf/models/work/work-item-immediate-manager-form-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemImmediateManagerFormNavigationActionSerializer implements Serializer<WorkItemImmediateManagerFormNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemImmediateManagerFormNavigationAction
    deserialize(data: any): WorkItemImmediateManagerFormNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemImmediateManagerFormNavigationAction(copy);
    }

    serialize(entity: WorkItemImmediateManagerFormNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemImmediateManagerFormNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemImmediateManagerFormNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            immediateManagerFormId: entity.immediateManagerFormId
        };
    }
}
