import { Serializer } from "@alf/core/models";
import { WorkItemAmeldingNavigationAction } from "@alf/models/work/work-item-amelding-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemAmeldingNavigationActionSerializer implements Serializer<WorkItemAmeldingNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemAmeldingNavigationAction
    deserialize(data: any): WorkItemAmeldingNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemAmeldingNavigationAction(copy);
    }

    serialize(entity: WorkItemAmeldingNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemAmeldingNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemAmeldingNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId
        };
    }
}
