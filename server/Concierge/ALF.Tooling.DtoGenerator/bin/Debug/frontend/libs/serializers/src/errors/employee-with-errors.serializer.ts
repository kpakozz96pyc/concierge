import { EmployeeLevelErrorSerializer } from "./employee-level-error.serializer";
import { EmploymentLevelErrorSerializer } from "./employment-level-error.serializer";
import { Serializer } from "@alf/core/models";
import { EmployeeWithErrors } from "@alf/models/errors/employee-with-errors";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeWithErrorsSerializer implements Serializer<EmployeeWithErrors> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeWithErrors
    deserialize(data: any): EmployeeWithErrors | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.employeeLevelErrors = (copy.employeeLevelErrors || []).map(new EmployeeLevelErrorSerializer().deserialize);

        copy.employmentLevelErrors = (copy.employmentLevelErrors || []).map(new EmploymentLevelErrorSerializer().deserialize);

        return new EmployeeWithErrors(copy);
    }

    serialize(entity: EmployeeWithErrors | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeWithErrors, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeWithErrors | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeWithErrors.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            employeeLevelErrors: entity.employeeLevelErrors
                ? entity.employeeLevelErrors.map(e => new EmployeeLevelErrorSerializer().serialize(e, _forceTypeHint))
                : undefined,
            employmentLevelErrors: entity.employmentLevelErrors
                ? entity.employmentLevelErrors.map(e => new EmploymentLevelErrorSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
