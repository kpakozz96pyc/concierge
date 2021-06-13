import { OneTimePasswordType } from "@alf/models/altinn/enums/one-time-password-type";
import { Serializer } from "@alf/core/models";
import { OneTimePasswordCredentials } from "@alf/models/altinn/one-time-password-credentials";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OneTimePasswordCredentialsSerializer implements Serializer<OneTimePasswordCredentials> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OneTimePasswordCredentials
    deserialize(data: any): OneTimePasswordCredentials | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.type !== undefined)
            copy.type = OneTimePasswordType[copy.type];

        return new OneTimePasswordCredentials(copy);
    }

    serialize(entity: OneTimePasswordCredentials | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OneTimePasswordCredentials, _forceTypeHint?: boolean): any
    serialize(entity: OneTimePasswordCredentials | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? OneTimePasswordCredentials.typeNameHint : undefined,
            oneTimePassword: entity.oneTimePassword,
            type: entity.type !== null && entity.type !== undefined
                ? OneTimePasswordType[entity.type]
                : undefined
        };
    }
}
