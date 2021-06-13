import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmployeeElectronicCommunication } from "@alf/models/persons/employee-electronic-communication";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeElectronicCommunicationSerializer implements Serializer<EmployeeElectronicCommunication> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeElectronicCommunication
    deserialize(data: any): EmployeeElectronicCommunication | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        return new EmployeeElectronicCommunication(copy);
    }

    serialize(entity: EmployeeElectronicCommunication | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeElectronicCommunication, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeElectronicCommunication | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeElectronicCommunication.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            schemeCode: entity.schemeCode,
            employeeId: entity.employeeId,
            electronicCommunicationId: entity.electronicCommunicationId,
            isActive: entity.isActive,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate)
        };
    }
}
