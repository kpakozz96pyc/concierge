import { ReportType } from "@alf/models/reports/enums/report-type";
import { ReportAffiliation } from "@alf/models/reports/enums/report-affiliation";
import { ReportFilterSerializer } from "./report-filter.serializer";
import { Serializer } from "@alf/core/models";
import { Report } from "@alf/models/reports/report";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportSerializer implements Serializer<Report> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Report
    deserialize(data: any): Report | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.reportType = ReportType[copy.reportType];

        copy.createdAt = new Date(copy.createdAt);

        copy.filters = (copy.filters || []).map(new ReportFilterSerializer().deserialize);

        copy.affiliation = ReportAffiliation[copy.affiliation];

        return new Report(copy);
    }

    serialize(entity: Report | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Report, _forceTypeHint?: boolean): any
    serialize(entity: Report | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Report.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            reportType: ReportType[entity.reportType],
            reportTemplateId: entity.reportTemplateId,
            isReceipt: entity.isReceipt,
            canBeRefreshed: entity.canBeRefreshed,
            canBeDeleted: entity.canBeDeleted,
            canBeCopied: entity.canBeCopied,
            canBeModified: entity.canBeModified,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            createdBy: entity.createdBy,
            filters: entity.filters
                ? entity.filters.map(e => new ReportFilterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            latestRun: entity.latestRun,
            description: entity.description,
            affiliation: ReportAffiliation[entity.affiliation]
        };
    }
}
