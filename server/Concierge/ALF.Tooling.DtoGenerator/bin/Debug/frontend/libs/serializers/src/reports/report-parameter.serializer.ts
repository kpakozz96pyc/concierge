import { ReportFilterType } from "@alf/models/reports/enums/report-filter-type";
import { Serializer } from "@alf/core/models";
import { ReportParameter } from "@alf/models/reports/report-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportParameterSerializer implements Serializer<ReportParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportParameter
    deserialize(data: any): ReportParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameterType = ReportFilterType[copy.parameterType];

        return new ReportParameter(copy);
    }

    serialize(entity: ReportParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportParameter, _forceTypeHint?: boolean): any
    serialize(entity: ReportParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportParameter.typeNameHint : undefined,
            id: entity.id,
            parameterType: ReportFilterType[entity.parameterType],
            reportRunId: entity.reportRunId,
            name: entity.name,
            value: entity.value,
            lookupId: entity.lookupId
        };
    }
}
