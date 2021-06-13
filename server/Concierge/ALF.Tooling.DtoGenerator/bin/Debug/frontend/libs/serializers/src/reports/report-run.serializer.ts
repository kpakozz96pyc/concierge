import { ReportRunStatus } from "@alf/models/reports/enums/report-run-status";
import { ReportDataSerializer } from "./report-data.serializer";
import { ReportParameterSerializer } from "./report-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { ReportRun } from "@alf/models/reports/report-run";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportRunSerializer implements Serializer<ReportRun> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportRun
    deserialize(data: any): ReportRun | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = ReportRunStatus[copy.status];

        copy.orderedAt = new Date(copy.orderedAt);

        copy.generatedData = (copy.generatedData || []).map(new ReportDataSerializer().deserialize);

        copy.reportParameter = (copy.reportParameter || []).map(new ReportParameterSerializer().deserialize);

        return new ReportRun(copy);
    }

    serialize(entity: ReportRun | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportRun, _forceTypeHint?: boolean): any
    serialize(entity: ReportRun | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportRun.typeNameHint : undefined,
            id: entity.id,
            reportId: entity.reportId,
            periodId: entity.periodId,
            isCompleted: entity.isCompleted,
            status: ReportRunStatus[entity.status],
            beingCreatedByJobId: entity.beingCreatedByJobId,
            orderedAt: entity.orderedAt
                ? entity.orderedAt.toISOString()
                : undefined,
            orderedBy: entity.orderedBy,
            generatedData: entity.generatedData
                ? entity.generatedData.map(e => new ReportDataSerializer().serialize(e, _forceTypeHint))
                : undefined,
            reportParameter: entity.reportParameter
                ? entity.reportParameter.map(e => new ReportParameterSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
