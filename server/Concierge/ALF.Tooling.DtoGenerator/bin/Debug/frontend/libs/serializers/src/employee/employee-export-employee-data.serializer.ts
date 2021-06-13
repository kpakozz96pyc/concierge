import { Serializer } from "@alf/core/models";
import { EmployeeExportEmployeeData } from "@alf/models/employee/employee-export-employee-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExportEmployeeDataSerializer implements Serializer<EmployeeExportEmployeeData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeExportEmployeeData
    deserialize(data: any): EmployeeExportEmployeeData | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.currentRecordTimestamp = new Date(copy.currentRecordTimestamp);

        copy.currentValuesTimestamp = new Date(copy.currentValuesTimestamp);

        return new EmployeeExportEmployeeData(copy);
    }

    serialize(entity: EmployeeExportEmployeeData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeExportEmployeeData, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeExportEmployeeData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeExportEmployeeData.typeNameHint : undefined,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            includedInExport: entity.includedInExport,
            currentRecordTimestamp: entity.currentRecordTimestamp
                ? entity.currentRecordTimestamp.toISOString()
                : undefined,
            currentValuesTimestamp: entity.currentValuesTimestamp
                ? entity.currentValuesTimestamp.toISOString()
                : undefined,
            exportOrder: entity.exportOrder,
            employee: entity.employee
        };
    }
}
