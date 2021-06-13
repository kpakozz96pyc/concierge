import { ReportFilterSerializer } from "./report-filter.serializer";
import { Serializer } from "@alf/core/models";
import { ReportOrderTemplate } from "@alf/models/reports/report-order-template";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportOrderTemplateSerializer implements Serializer<ReportOrderTemplate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportOrderTemplate
    deserialize(data: any): ReportOrderTemplate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.filters = (copy.filters || []).map(new ReportFilterSerializer().deserialize);

        return new ReportOrderTemplate(copy);
    }

    serialize(entity: ReportOrderTemplate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportOrderTemplate, _forceTypeHint?: boolean): any
    serialize(entity: ReportOrderTemplate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportOrderTemplate.typeNameHint : undefined,
            reportTemplateId: entity.reportTemplateId,
            filters: entity.filters
                ? entity.filters.map(e => new ReportFilterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            supportedFormats: entity.supportedFormats
        };
    }
}
