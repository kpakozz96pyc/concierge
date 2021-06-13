import { UserSettingsAltinnCredentialsSerializer } from "./user-settings-altinn-credentials.serializer";
import { UserSettingsAltinnCredentials } from "@alf/models/configuration/user-settings-altinn-credentials";
import { Serializer } from "@alf/core/models";
import { UserSettingsValue } from "@alf/models/configuration/user-settings-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UserSettingsValueSerializer implements Serializer<UserSettingsValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UserSettingsValue
    deserialize(data: any): UserSettingsValue | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Configuration.UserSettingsAltinnCredentials, ALF.Shared.Dto")
            return new UserSettingsAltinnCredentialsSerializer().deserialize(data);

        throw new Error("Unable to deserialize UserSettingsValue, cannot infer type from " + data.$type);
    }

    serialize(entity: UserSettingsValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UserSettingsValue, _forceTypeHint?: boolean): any
    serialize(entity: UserSettingsValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Configuration.UserSettingsAltinnCredentials, ALF.Shared.Dto")
            return new UserSettingsAltinnCredentialsSerializer().serialize(entity as UserSettingsAltinnCredentials, _forceTypeHint);

        throw new Error("Unable to serialize UserSettingsValue, cannot infer type from " + entity.$type);
    }
}
