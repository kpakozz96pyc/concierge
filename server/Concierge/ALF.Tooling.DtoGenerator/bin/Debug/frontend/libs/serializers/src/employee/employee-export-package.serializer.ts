import { Serializer } from "@alf/core/models";
import { EmployeeExportPackage } from "@alf/models/employee/employee-export-package";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExportPackageSerializer implements Serializer<EmployeeExportPackage> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeExportPackage
    deserialize(data: any): EmployeeExportPackage | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdTimestamp = new Date(copy.createdTimestamp);

        if (copy.deliveredTimestamp !== undefined)
            copy.deliveredTimestamp = new Date(copy.deliveredTimestamp);

        return new EmployeeExportPackage(copy);
    }

    serialize(entity: EmployeeExportPackage | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeExportPackage, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeExportPackage | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeExportPackage.typeNameHint : undefined,
            id: entity.id,
            exportOrderId: entity.exportOrderId,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            employmentSequenceNumber: entity.employmentSequenceNumber,
            positionCode: entity.positionCode,
            createdTimestamp: entity.createdTimestamp
                ? entity.createdTimestamp.toISOString()
                : undefined,
            deliveredTimestamp: entity.deliveredTimestamp
                ? entity.deliveredTimestamp.toISOString()
                : undefined,
            exportOrder: entity.exportOrder,
            fileData: entity.fileData
        };
    }
}
