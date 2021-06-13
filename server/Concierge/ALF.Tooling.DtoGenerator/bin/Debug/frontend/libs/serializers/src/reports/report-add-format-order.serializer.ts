import { Serializer } from "@alf/core/models";
import { ReportAddFormatOrder } from "@alf/models/reports/report-add-format-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportAddFormatOrderSerializer implements Serializer<ReportAddFormatOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportAddFormatOrder
    deserialize(data: any): ReportAddFormatOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportAddFormatOrder(copy);
    }

    serialize(entity: ReportAddFormatOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportAddFormatOrder, _forceTypeHint?: boolean): any
    serialize(entity: ReportAddFormatOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportAddFormatOrder.typeNameHint : undefined,
            companyId: entity.companyId,
            reportRunId: entity.reportRunId,
            fileFormat: entity.fileFormat
        };
    }
}
