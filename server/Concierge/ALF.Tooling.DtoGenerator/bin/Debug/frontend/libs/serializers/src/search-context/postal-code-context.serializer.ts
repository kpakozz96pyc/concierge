import { Serializer } from "@alf/core/models";
import { PostalCodeContext } from "@alf/models/search-context/postal-code-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PostalCodeContextSerializer implements Serializer<PostalCodeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PostalCodeContext
    deserialize(data: any): PostalCodeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PostalCodeContext(copy);
    }

    serialize(entity: PostalCodeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PostalCodeContext, _forceTypeHint?: boolean): any
    serialize(entity: PostalCodeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PostalCodeContext.typeNameHint : undefined,
            countryCode: entity.countryCode
        };
    }
}
