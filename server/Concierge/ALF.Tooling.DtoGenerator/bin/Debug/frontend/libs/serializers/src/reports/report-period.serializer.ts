import { Serializer } from "@alf/core/models";
import { ReportPeriod } from "@alf/models/reports/report-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportPeriodSerializer implements Serializer<ReportPeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportPeriod
    deserialize(data: any): ReportPeriod | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportPeriod(copy);
    }

    serialize(entity: ReportPeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportPeriod, _forceTypeHint?: boolean): any
    serialize(entity: ReportPeriod | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportPeriod.typeNameHint : undefined,
            archivedReportId: entity.archivedReportId,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber
        };
    }
}
