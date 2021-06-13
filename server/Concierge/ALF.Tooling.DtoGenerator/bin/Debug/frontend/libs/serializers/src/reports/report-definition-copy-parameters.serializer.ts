import { Serializer } from "@alf/core/models";
import { ReportDefinitionCopyParameters } from "@alf/models/reports/report-definition-copy-parameters";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDefinitionCopyParametersSerializer implements Serializer<ReportDefinitionCopyParameters> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportDefinitionCopyParameters
    deserialize(data: any): ReportDefinitionCopyParameters | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportDefinitionCopyParameters(copy);
    }

    serialize(entity: ReportDefinitionCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportDefinitionCopyParameters, _forceTypeHint?: boolean): any
    serialize(entity: ReportDefinitionCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportDefinitionCopyParameters.typeNameHint : undefined,
            copyFromId: entity.copyFromId,
            copyToReportDefinitionCode: entity.copyToReportDefinitionCode,
            description: entity.description
        };
    }
}
