import { Serializer } from "@alf/core/models";
import { ReportDistribution } from "@alf/models/reports/report-distribution";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDistributionSerializer implements Serializer<ReportDistribution> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportDistribution
    deserialize(data: any): ReportDistribution | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportDistribution(copy);
    }

    serialize(entity: ReportDistribution | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportDistribution, _forceTypeHint?: boolean): any
    serialize(entity: ReportDistribution | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportDistribution.typeNameHint : undefined,
            reportId: entity.reportId,
            fileFormat: entity.fileFormat,
            email: entity.email
        };
    }
}
