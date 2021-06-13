import { Serializer } from "@alf/core/models";
import { ImmediateManagerContactInformation } from "@alf/models/immediate-manager/immediate-manager-contact-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImmediateManagerContactInformationSerializer implements Serializer<ImmediateManagerContactInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImmediateManagerContactInformation
    deserialize(data: any): ImmediateManagerContactInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ImmediateManagerContactInformation(copy);
    }

    serialize(entity: ImmediateManagerContactInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImmediateManagerContactInformation, _forceTypeHint?: boolean): any
    serialize(entity: ImmediateManagerContactInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ImmediateManagerContactInformation.typeNameHint : undefined,
            employeeId: entity.employeeId,
            autofilledFrom: entity.autofilledFrom,
            socialSecurityNumber: entity.socialSecurityNumber,
            firstname: entity.firstname,
            lastname: entity.lastname,
            email: entity.email,
            phoneNumber: entity.phoneNumber
        };
    }
}
