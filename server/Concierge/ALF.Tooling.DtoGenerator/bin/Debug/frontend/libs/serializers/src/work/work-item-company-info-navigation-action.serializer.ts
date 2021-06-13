import { Serializer } from "@alf/core/models";
import { WorkItemCompanyInfoNavigationAction } from "@alf/models/work/work-item-company-info-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemCompanyInfoNavigationActionSerializer implements Serializer<WorkItemCompanyInfoNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemCompanyInfoNavigationAction
    deserialize(data: any): WorkItemCompanyInfoNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemCompanyInfoNavigationAction(copy);
    }

    serialize(entity: WorkItemCompanyInfoNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemCompanyInfoNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemCompanyInfoNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            destination: entity.destination
        };
    }
}
