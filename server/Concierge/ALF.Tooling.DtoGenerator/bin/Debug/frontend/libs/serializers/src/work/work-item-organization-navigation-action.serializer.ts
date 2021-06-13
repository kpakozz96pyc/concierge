import { Serializer } from "@alf/core/models";
import { WorkItemOrganizationNavigationAction } from "@alf/models/work/work-item-organization-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemOrganizationNavigationActionSerializer implements Serializer<WorkItemOrganizationNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemOrganizationNavigationAction
    deserialize(data: any): WorkItemOrganizationNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemOrganizationNavigationAction(copy);
    }

    serialize(entity: WorkItemOrganizationNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemOrganizationNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemOrganizationNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            organizationId: entity.organizationId,
            destination: entity.destination
        };
    }
}
