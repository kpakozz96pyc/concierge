import { Serializer } from "@alf/core/models";
import { AuthenticationChallengeResult } from "@alf/models/altinn/authentication-challenge-result";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AuthenticationChallengeResultSerializer implements Serializer<AuthenticationChallengeResult> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AuthenticationChallengeResult
    deserialize(data: any): AuthenticationChallengeResult | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.validFrom = new Date(copy.validFrom);

        copy.validUntil = new Date(copy.validUntil);

        return new AuthenticationChallengeResult(copy);
    }

    serialize(entity: AuthenticationChallengeResult | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AuthenticationChallengeResult, _forceTypeHint?: boolean): any
    serialize(entity: AuthenticationChallengeResult | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AuthenticationChallengeResult.typeNameHint : undefined,
            message: entity.message,
            validFrom: entity.validFrom
                ? entity.validFrom.toISOString()
                : undefined,
            validUntil: entity.validUntil
                ? entity.validUntil.toISOString()
                : undefined
        };
    }
}
