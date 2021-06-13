import { Serializer } from "@alf/core/models";
import { EmployeeImportNavigationAction } from "@alf/models/work/employee-import-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportNavigationActionSerializer implements Serializer<EmployeeImportNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeImportNavigationAction
    deserialize(data: any): EmployeeImportNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeImportNavigationAction(copy);
    }

    serialize(entity: EmployeeImportNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeImportNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeImportNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            importId: entity.importId
        };
    }
}
