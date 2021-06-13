import { AvailableValueSerializer } from "../available-value/available-value.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmployeeSearchInformation } from "@alf/models/core/employee-search-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeSearchInformationSerializer implements Serializer<EmployeeSearchInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeSearchInformation
    deserialize(data: any): EmployeeSearchInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.dateOfBirth !== undefined)
            copy.dateOfBirth = new Date(copy.dateOfBirth);

        copy.referenceEmployment = new AvailableValueSerializer().deserialize(copy.referenceEmployment);

        return new EmployeeSearchInformation(copy);
    }

    serialize(entity: EmployeeSearchInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeSearchInformation, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeSearchInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeSearchInformation.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            name: entity.name,
            image: entity.image,
            externalId: entity.externalId,
            dateOfBirth: serializeDate(entity.dateOfBirth),
            referenceEmployment: new AvailableValueSerializer().serialize(entity.referenceEmployment, _forceTypeHint)
        };
    }
}
