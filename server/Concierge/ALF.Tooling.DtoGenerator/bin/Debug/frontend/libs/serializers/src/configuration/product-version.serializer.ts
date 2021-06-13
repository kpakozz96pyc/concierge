import { Serializer } from "@alf/core/models";
import { ProductVersion } from "@alf/models/configuration/product-version";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProductVersionSerializer implements Serializer<ProductVersion> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProductVersion
    deserialize(data: any): ProductVersion | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProductVersion(copy);
    }

    serialize(entity: ProductVersion | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProductVersion, _forceTypeHint?: boolean): any
    serialize(entity: ProductVersion | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProductVersion.typeNameHint : undefined,
            id: entity.id,
            major: entity.major,
            minor: entity.minor,
            build: entity.build,
            fileVersion: entity.fileVersion,
            informationalVersion: entity.informationalVersion
        };
    }
}
