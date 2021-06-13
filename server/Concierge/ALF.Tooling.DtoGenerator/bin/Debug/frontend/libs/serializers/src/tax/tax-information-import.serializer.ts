import { ReportDataSerializer } from "../reports/report-data.serializer";
import { Serializer } from "@alf/core/models";
import { TaxInformationImport } from "@alf/models/tax/tax-information-import";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationImportSerializer implements Serializer<TaxInformationImport> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInformationImport
    deserialize(data: any): TaxInformationImport | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.requestedAt = new Date(copy.requestedAt);

        copy.reportData = new ReportDataSerializer().deserialize(copy.reportData);

        copy.changedAt = new Date(copy.changedAt);

        return new TaxInformationImport(copy);
    }

    serialize(entity: TaxInformationImport | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInformationImport, _forceTypeHint?: boolean): any
    serialize(entity: TaxInformationImport | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxInformationImport.typeNameHint : undefined,
            id: entity.id,
            yearId: entity.yearId,
            companyId: entity.companyId,
            year: entity.year,
            requestedBy: entity.requestedBy,
            requestedAt: entity.requestedAt
                ? entity.requestedAt.toISOString()
                : undefined,
            receiptReportId: entity.receiptReportId,
            statusDetails: entity.statusDetails,
            hasDeviation: entity.hasDeviation,
            numberOfTaxCards: entity.numberOfTaxCards,
            reportData: new ReportDataSerializer().serialize(entity.reportData, _forceTypeHint),
            status: entity.status,
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            waitingForJobId: entity.waitingForJobId,
            onlyIfAnyoneIsMissingTaxCards: entity.onlyIfAnyoneIsMissingTaxCards,
            isSkipped: entity.isSkipped
        };
    }
}
