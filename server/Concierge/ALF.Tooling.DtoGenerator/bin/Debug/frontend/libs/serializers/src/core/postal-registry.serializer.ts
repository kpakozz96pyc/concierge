import { Serializer } from "@alf/core/models";
import { PostalRegistry } from "@alf/models/core/postal-registry";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PostalRegistrySerializer implements Serializer<PostalRegistry> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PostalRegistry
    deserialize(data: any): PostalRegistry | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PostalRegistry(copy);
    }

    serialize(entity: PostalRegistry | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PostalRegistry, _forceTypeHint?: boolean): any
    serialize(entity: PostalRegistry | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PostalRegistry.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            displayId: entity.displayId,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
            name: entity.name,
            municipalityCode: entity.municipalityCode
        };
    }
}
