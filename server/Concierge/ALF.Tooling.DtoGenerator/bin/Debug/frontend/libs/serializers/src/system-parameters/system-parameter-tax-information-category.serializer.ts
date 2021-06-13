import { Serializer } from "@alf/core/models";
import { SystemParameterTaxInformationCategory } from "@alf/models/system-parameters/system-parameter-tax-information-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SystemParameterTaxInformationCategorySerializer implements Serializer<SystemParameterTaxInformationCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SystemParameterTaxInformationCategory
    deserialize(data: any): SystemParameterTaxInformationCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SystemParameterTaxInformationCategory(copy);
    }

    serialize(entity: SystemParameterTaxInformationCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SystemParameterTaxInformationCategory, _forceTypeHint?: boolean): any
    serialize(entity: SystemParameterTaxInformationCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            taxCardEmail: entity.taxCardEmail,
            taxCardPhone: entity.taxCardPhone,
            id: entity.id,
            code: entity.code,
            description: entity.description
        };
    }
}
