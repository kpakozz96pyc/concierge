import { MediaType } from "@alf/models/reports/enums/media-type";
import { ReportDefinitionDetailsSerializer } from "./report-definition-details.serializer";
import { Serializer } from "@alf/core/models";
import { ReportDefinition } from "@alf/models/reports/report-definition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDefinitionSerializer implements Serializer<ReportDefinition> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportDefinition
    deserialize(data: any): ReportDefinition | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.mediaType = MediaType[copy.mediaType];

        copy.columns = (copy.columns || []).map(new ReportDefinitionDetailsSerializer().deserialize);

        return new ReportDefinition(copy);
    }

    serialize(entity: ReportDefinition | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportDefinition, _forceTypeHint?: boolean): any
    serialize(entity: ReportDefinition | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportDefinition.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            reportCode: entity.reportCode,
            description: entity.description,
            reportTable: entity.reportTable,
            mediaType: MediaType[entity.mediaType],
            dateFormat: entity.dateFormat,
            fieldSeparator: entity.fieldSeparator,
            decimalSeparator: entity.decimalSeparator,
            reportFormat: entity.reportFormat,
            includeOnlyActiveEmployees: entity.includeOnlyActiveEmployees,
            onlySummary: entity.onlySummary,
            doNotReverseSigns: entity.doNotReverseSigns,
            pivotTable: entity.pivotTable,
            xsltFilename: entity.xsltFilename,
            selectedCompanies: entity.selectedCompanies,
            excludeSelectedCompanies: entity.excludeSelectedCompanies,
            reportProcessId: entity.reportProcessId,
            reportProcessType: entity.reportProcessType,
            isTimelineReport: entity.isTimelineReport,
            isAvailableInProcessTemplate: entity.isAvailableInProcessTemplate,
            columns: entity.columns
                ? entity.columns.map(e => new ReportDefinitionDetailsSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
