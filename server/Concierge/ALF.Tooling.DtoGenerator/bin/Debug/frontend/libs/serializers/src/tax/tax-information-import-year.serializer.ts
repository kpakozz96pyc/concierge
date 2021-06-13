import { Serializer } from "@alf/core/models";
import { TaxInformationImportYear } from "@alf/models/tax/tax-information-import-year";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationImportYearSerializer implements Serializer<TaxInformationImportYear> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInformationImportYear
    deserialize(data: any): TaxInformationImportYear | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TaxInformationImportYear(copy);
    }

    serialize(entity: TaxInformationImportYear | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInformationImportYear, _forceTypeHint?: boolean): any
    serialize(entity: TaxInformationImportYear | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxInformationImportYear.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            year: entity.year,
            canSynchronize: entity.canSynchronize
        };
    }
}
