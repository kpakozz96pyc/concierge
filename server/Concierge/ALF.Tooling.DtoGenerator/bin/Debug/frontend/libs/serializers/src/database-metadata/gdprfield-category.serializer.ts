import { Serializer } from "@alf/core/models";
import { GDPRFieldCategory } from "@alf/models/database-metadata/gdprfield-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GDPRFieldCategorySerializer implements Serializer<GDPRFieldCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GDPRFieldCategory
    deserialize(data: any): GDPRFieldCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GDPRFieldCategory(copy);
    }

    serialize(entity: GDPRFieldCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GDPRFieldCategory, _forceTypeHint?: boolean): any
    serialize(entity: GDPRFieldCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GDPRFieldCategory.typeNameHint : undefined,
            id: entity.id
        };
    }
}
