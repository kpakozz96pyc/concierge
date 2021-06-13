import { TaxInformationPartSerializer } from "./tax-information-part.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TaxInformation } from "@alf/models/tax/tax-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationSerializer implements Serializer<TaxInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInformation
    deserialize(data: any): TaxInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.validFrom = new Date(copy.validFrom);

        copy.created = new Date(copy.created);

        if (copy.modified !== undefined)
            copy.modified = new Date(copy.modified);

        copy.parts = (copy.parts || []).map(new TaxInformationPartSerializer().deserialize);

        return new TaxInformation(copy);
    }

    serialize(entity: TaxInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInformation, _forceTypeHint?: boolean): any
    serialize(entity: TaxInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxInformation.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            taxYear: entity.taxYear,
            validFrom: serializeDate(entity.validFrom),
            taxId: entity.taxId,
            created: entity.created
                ? entity.created.toISOString()
                : undefined,
            createdBy: entity.createdBy,
            modified: entity.modified
                ? entity.modified.toISOString()
                : undefined,
            modifiedBy: entity.modifiedBy,
            isActive: entity.isActive,
            parts: entity.parts
                ? entity.parts.map(e => new TaxInformationPartSerializer().serialize(e, _forceTypeHint))
                : undefined,
            svalbard: entity.svalbard,
            actionZone: entity.actionZone,
            noTaxCard: entity.noTaxCard,
            noDeduction: entity.noDeduction,
            norwegianExpatPensionerTax: entity.norwegianExpatPensionerTax,
            norwegianExpatSalaryTax: entity.norwegianExpatSalaryTax,
            isEditable: entity.isEditable
        };
    }
}
