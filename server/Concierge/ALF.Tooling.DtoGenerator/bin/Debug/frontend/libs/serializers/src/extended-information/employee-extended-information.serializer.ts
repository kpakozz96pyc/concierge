import { Serializer } from "@alf/core/models";
import { EmployeeExtendedInformation } from "@alf/models/extended-information/employee-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExtendedInformationSerializer implements Serializer<EmployeeExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeExtendedInformation
    deserialize(data: any): EmployeeExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeExtendedInformation(copy);
    }

    serialize(entity: EmployeeExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeExtendedInformation.typeNameHint : undefined,
            note: entity.note
        };
    }
}
