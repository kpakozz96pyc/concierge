import { Serializer } from "@alf/core/models";
import { UserSettingsAltinnCredentials } from "@alf/models/configuration/user-settings-altinn-credentials";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UserSettingsAltinnCredentialsSerializer implements Serializer<UserSettingsAltinnCredentials> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UserSettingsAltinnCredentials
    deserialize(data: any): UserSettingsAltinnCredentials | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new UserSettingsAltinnCredentials(copy);
    }

    serialize(entity: UserSettingsAltinnCredentials | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UserSettingsAltinnCredentials, _forceTypeHint?: boolean): any
    serialize(entity: UserSettingsAltinnCredentials | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            altinnUser: entity.altinnUser,
            altinnPassword: entity.altinnPassword,
            altinnSystemId: entity.altinnSystemId,
            altinnSystemPassword: entity.altinnSystemPassword
        };
    }
}
