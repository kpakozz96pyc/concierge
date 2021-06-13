import { Serializer } from "@alf/core/models";
import { EmployeeEmployment } from "@alf/models/core/employee-employment";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeEmploymentSerializer implements Serializer<EmployeeEmployment> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeEmployment
    deserialize(data: any): EmployeeEmployment | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeEmployment(copy);
    }

    serialize(entity: EmployeeEmployment | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeEmployment, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeEmployment | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeEmployment.typeNameHint : undefined,
            id: entity.id,
            employeeNumber: entity.employeeNumber,
            referenceEmploymentId: entity.referenceEmploymentId
        };
    }
}
