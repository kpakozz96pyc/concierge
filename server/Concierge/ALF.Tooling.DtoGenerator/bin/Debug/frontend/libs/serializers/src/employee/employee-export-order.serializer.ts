import { EmployeeExportEmployeeDataSerializer } from "./employee-export-employee-data.serializer";
import { EmployeeExportPackageSerializer } from "./employee-export-package.serializer";
import { Serializer } from "@alf/core/models";
import { EmployeeExportOrder } from "@alf/models/employee/employee-export-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExportOrderSerializer implements Serializer<EmployeeExportOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeExportOrder
    deserialize(data: any): EmployeeExportOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdTimestamp = new Date(copy.createdTimestamp);

        copy.scheduledForTimestamp = new Date(copy.scheduledForTimestamp);

        if (copy.preparedTimestamp !== undefined)
            copy.preparedTimestamp = new Date(copy.preparedTimestamp);

        if (copy.packagedTimestamp !== undefined)
            copy.packagedTimestamp = new Date(copy.packagedTimestamp);

        if (copy.deliveredTimestamp !== undefined)
            copy.deliveredTimestamp = new Date(copy.deliveredTimestamp);

        copy.exportEmployeeData = (copy.exportEmployeeData || []).map(new EmployeeExportEmployeeDataSerializer().deserialize);

        copy.exportEmployeePackage = (copy.exportEmployeePackage || []).map(new EmployeeExportPackageSerializer().deserialize);

        return new EmployeeExportOrder(copy);
    }

    serialize(entity: EmployeeExportOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeExportOrder, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeExportOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeExportOrder.typeNameHint : undefined,
            id: entity.id,
            jobOrderId: entity.jobOrderId,
            contextType: entity.contextType,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            employmentSequenceNumber: entity.employmentSequenceNumber,
            positionCode: entity.positionCode,
            status: entity.status,
            createdByUserId: entity.createdByUserId,
            createdByUsername: entity.createdByUsername,
            createdTimestamp: entity.createdTimestamp
                ? entity.createdTimestamp.toISOString()
                : undefined,
            scheduledForTimestamp: entity.scheduledForTimestamp
                ? entity.scheduledForTimestamp.toISOString()
                : undefined,
            preparedTimestamp: entity.preparedTimestamp
                ? entity.preparedTimestamp.toISOString()
                : undefined,
            packagedTimestamp: entity.packagedTimestamp
                ? entity.packagedTimestamp.toISOString()
                : undefined,
            deliveredTimestamp: entity.deliveredTimestamp
                ? entity.deliveredTimestamp.toISOString()
                : undefined,
            exportTrigger: entity.exportTrigger,
            exportEmployeeData: entity.exportEmployeeData
                ? entity.exportEmployeeData.map(e => new EmployeeExportEmployeeDataSerializer().serialize(e, _forceTypeHint))
                : undefined,
            exportEmploymentData: entity.exportEmploymentData,
            exportEmployeePackage: entity.exportEmployeePackage
                ? entity.exportEmployeePackage.map(e => new EmployeeExportPackageSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
