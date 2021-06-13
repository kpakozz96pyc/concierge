import { Serializer } from "@alf/core/models";
import { ReportTemplate } from "@alf/models/reports/report-template";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportTemplateSerializer implements Serializer<ReportTemplate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportTemplate
    deserialize(data: any): ReportTemplate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportTemplate(copy);
    }

    serialize(entity: ReportTemplate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportTemplate, _forceTypeHint?: boolean): any
    serialize(entity: ReportTemplate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportTemplate.typeNameHint : undefined,
            id: entity.id,
            name: entity.name,
            companyId: entity.companyId,
            isOrderable: entity.isOrderable,
            metadata: entity.metadata,
            reportProcessId: entity.reportProcessId,
            supportedFormats: entity.supportedFormats
        };
    }
}
