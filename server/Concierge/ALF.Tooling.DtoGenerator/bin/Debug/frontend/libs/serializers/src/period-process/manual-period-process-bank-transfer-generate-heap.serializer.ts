﻿import { ReportDataSerializer } from "../reports/report-data.serializer";
import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessBankTransferGenerateHeap } from "@alf/models/period-process/manual-period-process-bank-transfer-generate-heap";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessBankTransferGenerateHeapSerializer implements Serializer<ManualPeriodProcessBankTransferGenerateHeap> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessBankTransferGenerateHeap
    deserialize(data: any): ManualPeriodProcessBankTransferGenerateHeap | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.reportData = new ReportDataSerializer().deserialize(copy.reportData);

        return new ManualPeriodProcessBankTransferGenerateHeap(copy);
    }

    serialize(entity: ManualPeriodProcessBankTransferGenerateHeap | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessBankTransferGenerateHeap, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessBankTransferGenerateHeap | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            heapId: entity.heapId,
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