import { Serializer } from "@alf/core/models";
import { WorkItemEmployeeNavigationAction } from "@alf/models/work/work-item-employee-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemEmployeeNavigationActionSerializer implements Serializer<WorkItemEmployeeNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemEmployeeNavigationAction
    deserialize(data: any): WorkItemEmployeeNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemEmployeeNavigationAction(copy);
    }

    serialize(entity: WorkItemEmployeeNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemEmployeeNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemEmployeeNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            navigationText: entity.navigationText,
            destination: entity.destination
        };
    }
}
