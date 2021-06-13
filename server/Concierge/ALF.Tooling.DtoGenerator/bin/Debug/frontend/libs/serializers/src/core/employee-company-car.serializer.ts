import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmployeeCompanyCar } from "@alf/models/core/employee-company-car";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeCompanyCarSerializer implements Serializer<EmployeeCompanyCar> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeCompanyCar
    deserialize(data: any): EmployeeCompanyCar | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        return new EmployeeCompanyCar(copy);
    }

    serialize(entity: EmployeeCompanyCar | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeCompanyCar, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeCompanyCar | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeCompanyCar.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            companyCarId: entity.companyCarId,
            isActive: entity.isActive,
            isServiceDrivingAboveLimit: entity.isServiceDrivingAboveLimit,
            isMismatchAgainstListPrice: entity.isMismatchAgainstListPrice,
            distanceBetweenHomeAndWork: entity.distanceBetweenHomeAndWork,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate)
        };
    }
}
