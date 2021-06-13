import { Serializer } from "@alf/core/models";
import { SocialOfficeNumberCodeContext } from "@alf/models/search-context/social-office-number-code-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SocialOfficeNumberCodeContextSerializer implements Serializer<SocialOfficeNumberCodeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SocialOfficeNumberCodeContext
    deserialize(data: any): SocialOfficeNumberCodeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SocialOfficeNumberCodeContext(copy);
    }

    serialize(entity: SocialOfficeNumberCodeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SocialOfficeNumberCodeContext, _forceTypeHint?: boolean): any
    serialize(entity: SocialOfficeNumberCodeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SocialOfficeNumberCodeContext.typeNameHint : undefined,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode
        };
    }
}
