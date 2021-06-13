import { TaxInformationDeductionType } from "@alf/models/tax/enums/tax-information-deduction-type";
import { Serializer } from "@alf/core/models";
import { TaxInformationPart } from "@alf/models/tax/tax-information-part";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationPartSerializer implements Serializer<TaxInformationPart> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInformationPart
    deserialize(data: any): TaxInformationPart | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.created = new Date(copy.created);

        copy.modified = new Date(copy.modified);

        copy.deductionCodeType = TaxInformationDeductionType[copy.deductionCodeType];

        return new TaxInformationPart(copy);
    }

    serialize(entity: TaxInformationPart | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInformationPart, _forceTypeHint?: boolean): any
    serialize(entity: TaxInformationPart | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxInformationPart.typeNameHint : undefined,
            id: entity.id,
            deductionCode: entity.deductionCode,
            created: entity.created
                ? entity.created.toISOString()
                : undefined,
            createdBy: entity.createdBy,
            modified: entity.modified
                ? entity.modified.toISOString()
                : undefined,
            modifiedBy: entity.modifiedBy,
            deductionCodeType: TaxInformationDeductionType[entity.deductionCodeType],
            isPensioner: entity.isPensioner,
            taxTable: entity.taxTable,
            taxPercentage: entity.taxPercentage,
            freeCardAmountRemaining: entity.freeCardAmountRemaining
        };
    }
}
