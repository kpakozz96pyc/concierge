import { Serializer } from "@alf/core/models";
import { GDPRCategory } from "@alf/models/database-metadata/gdprcategory";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GDPRCategorySerializer implements Serializer<GDPRCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GDPRCategory
    deserialize(data: any): GDPRCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GDPRCategory(copy);
    }

    serialize(entity: GDPRCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GDPRCategory, _forceTypeHint?: boolean): any
    serialize(entity: GDPRCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GDPRCategory.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            mainCategory: entity.mainCategory,
            subCategory: entity.subCategory,
            subCategoryDescription: entity.subCategoryDescription,
            archiveMonths: entity.archiveMonths,
            overrideSubCategoryDescription: entity.overrideSubCategoryDescription,
            overrideArchiveMonths: entity.overrideArchiveMonths
        };
    }
}
