import { Serializer } from "@alf/core/models";
import { EmployeeContext } from "@alf/models/search-context/employee-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeContextSerializer implements Serializer<EmployeeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeContext
    deserialize(data: any): EmployeeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeContext(copy);
    }

    serialize(entity: EmployeeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeContext, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeContext.typeNameHint : undefined,
            employeeId: entity.employeeId
        };
    }
}
