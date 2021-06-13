import { Serializer } from "@alf/core/models";
import { ReportData } from "@alf/models/reports/report-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDataSerializer implements Serializer<ReportData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportData
    deserialize(data: any): ReportData | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportData(copy);
    }

    serialize(entity: ReportData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportData, _forceTypeHint?: boolean): any
    serialize(entity: ReportData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportData.typeNameHint : undefined,
            binaryItemId: entity.binaryItemId,
            fileFormat: entity.fileFormat,
            isComplete: entity.isComplete,
            beingCreatedByJobId: entity.beingCreatedByJobId
        };
    }
}
