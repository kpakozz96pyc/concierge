import { Serializer } from "@alf/core/models";
import { UserAdministrationDetails } from "@alf/models/account/user-administration-details";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UserAdministrationDetailsSerializer implements Serializer<UserAdministrationDetails> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UserAdministrationDetails
    deserialize(data: any): UserAdministrationDetails | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new UserAdministrationDetails(copy);
    }

    serialize(entity: UserAdministrationDetails | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UserAdministrationDetails, _forceTypeHint?: boolean): any
    serialize(entity: UserAdministrationDetails | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? UserAdministrationDetails.typeNameHint : undefined,
            id: entity.id,
            portalOwnership: entity.portalOwnership
        };
    }
}
