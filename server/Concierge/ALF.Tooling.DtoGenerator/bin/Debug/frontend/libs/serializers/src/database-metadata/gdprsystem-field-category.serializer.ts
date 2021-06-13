import { Serializer } from "@alf/core/models";
import { GDPRSystemFieldCategory } from "@alf/models/database-metadata/gdprsystem-field-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GDPRSystemFieldCategorySerializer implements Serializer<GDPRSystemFieldCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GDPRSystemFieldCategory
    deserialize(data: any): GDPRSystemFieldCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GDPRSystemFieldCategory(copy);
    }

    serialize(entity: GDPRSystemFieldCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GDPRSystemFieldCategory, _forceTypeHint?: boolean): any
    serialize(entity: GDPRSystemFieldCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GDPRSystemFieldCategory.typeNameHint : undefined,
            id: entity.id,
            mainCategory: entity.mainCategory,
            subCategory: entity.subCategory
        };
    }
}
