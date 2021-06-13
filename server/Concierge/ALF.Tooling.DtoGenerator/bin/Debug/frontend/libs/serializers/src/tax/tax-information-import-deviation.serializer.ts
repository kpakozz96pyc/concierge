import { Serializer } from "@alf/core/models";
import { TaxInformationImportDeviation } from "@alf/models/tax/tax-information-import-deviation";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationImportDeviationSerializer implements Serializer<TaxInformationImportDeviation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInformationImportDeviation
    deserialize(data: any): TaxInformationImportDeviation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.completedAt !== undefined)
            copy.completedAt = new Date(copy.completedAt);

        return new TaxInformationImportDeviation(copy);
    }

    serialize(entity: TaxInformationImportDeviation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInformationImportDeviation, _forceTypeHint?: boolean): any
    serialize(entity: TaxInformationImportDeviation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxInformationImportDeviation.typeNameHint : undefined,
            id: entity.id,
            taxInformationImportId: entity.taxInformationImportId,
            socialSecurityNumber: entity.socialSecurityNumber,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            deviationSeverity: entity.deviationSeverity,
            deviationCode: entity.deviationCode,
            deviationDescription: entity.deviationDescription,
            completed: entity.completed,
            completedByUsername: entity.completedByUsername,
            completedByUserId: entity.completedByUserId,
            completedAt: entity.completedAt
                ? entity.completedAt.toISOString()
                : undefined
        };
    }
}
