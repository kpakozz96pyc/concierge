import { Serializer } from "@alf/core/models";
import { GDPRSystemCategoryExtendedInformation } from "@alf/models/extended-information/gdprsystem-category-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GDPRSystemCategoryExtendedInformationSerializer implements Serializer<GDPRSystemCategoryExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GDPRSystemCategoryExtendedInformation
    deserialize(data: any): GDPRSystemCategoryExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GDPRSystemCategoryExtendedInformation(copy);
    }

    serialize(entity: GDPRSystemCategoryExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GDPRSystemCategoryExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: GDPRSystemCategoryExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GDPRSystemCategoryExtendedInformation.typeNameHint : undefined,
            mainCategory: entity.mainCategory
        };
    }
}
