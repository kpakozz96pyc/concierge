import { EmployeeSerializer } from "../core/employee.serializer";
import { EmploymentSerializer } from "../core/employment.serializer";
import { Serializer } from "@alf/core/models";
import { NewEmployee } from "@alf/models/persons/new-employee";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewEmployeeSerializer implements Serializer<NewEmployee> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewEmployee
    deserialize(data: any): NewEmployee | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new NewEmployee(copy);
    }

    serialize(entity: NewEmployee | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewEmployee, _forceTypeHint?: boolean): any
    serialize(entity: NewEmployee | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewEmployee.typeNameHint : undefined,
            employee: new EmployeeSerializer().serialize(entity.employee, _forceTypeHint),
            employment: new EmploymentSerializer().serialize(entity.employment, _forceTypeHint)
        };
    }
}
