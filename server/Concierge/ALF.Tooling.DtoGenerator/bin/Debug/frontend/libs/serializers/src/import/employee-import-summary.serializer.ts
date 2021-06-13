import { EmployeeImportDeviationRecordSerializer } from "../deviation/employee-import-deviation-record.serializer";
import { Serializer } from "@alf/core/models";
import { EmployeeImportSummary } from "@alf/models/import/employee-import-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportSummarySerializer implements Serializer<EmployeeImportSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeImportSummary
    deserialize(data: any): EmployeeImportSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deviations = (copy.deviations || []).map(new EmployeeImportDeviationRecordSerializer().deserialize);

        return new EmployeeImportSummary(copy);
    }

    serialize(entity: EmployeeImportSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeImportSummary, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeImportSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeImportSummary.typeNameHint : undefined,
            employeeImportId: entity.employeeImportId,
            newEmployeesCount: entity.newEmployeesCount,
            updatedEmployeesCount: entity.updatedEmployeesCount,
            newEmploymentsCount: entity.newEmploymentsCount,
            updatedEmploymentsCount: entity.updatedEmploymentsCount,
            deviations: entity.deviations
                ? entity.deviations.map(e => new EmployeeImportDeviationRecordSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
