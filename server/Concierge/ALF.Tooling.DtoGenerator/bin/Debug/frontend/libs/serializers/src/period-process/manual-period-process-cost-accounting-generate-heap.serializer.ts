import { ReportDataSerializer } from "../reports/report-data.serializer";
import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessCostAccountingGenerateHeap } from "@alf/models/period-process/manual-period-process-cost-accounting-generate-heap";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessCostAccountingGenerateHeapSerializer implements Serializer<ManualPeriodProcessCostAccountingGenerateHeap> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessCostAccountingGenerateHeap
    deserialize(data: any): ManualPeriodProcessCostAccountingGenerateHeap | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.reportData = new ReportDataSerializer().deserialize(copy.reportData);

        return new ManualPeriodProcessCostAccountingGenerateHeap(copy);
    }

    serialize(entity: ManualPeriodProcessCostAccountingGenerateHeap | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessCostAccountingGenerateHeap, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessCostAccountingGenerateHeap | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            heapId: entity.heapId,
            reportId: entity.reportId,
            reportData: new ReportDataSerializer().serialize(entity.reportData, _forceTypeHint),
            actions: entity.actions,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            periodId: entity.periodId,
            ordering: entity.ordering,
            periodProcessType: entity.periodProcessType,
            status: entity.status,
            statusDetails: entity.statusDetails,
            waitingForJobId: entity.waitingForJobId
        };
    }
}
