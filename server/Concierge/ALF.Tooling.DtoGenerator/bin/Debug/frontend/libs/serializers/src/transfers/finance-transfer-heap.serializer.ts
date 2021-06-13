import { TransferHeapPeriodType } from "@alf/models/transfers/enums/transfer-heap-period-type";
import { FinanceTransferHeapType } from "@alf/models/transfers/enums/finance-transfer-heap-type";
import { FinanceTransferHeapStatus } from "@alf/models/transfers/enums/finance-transfer-heap-status";
import { FinanceSystemMetadataSerializer } from "./finance-system-metadata.serializer";
import { FinanceTransferHeapActionSerializer } from "./finance-transfer-heap-action.serializer";
import { Serializer } from "@alf/core/models";
import { FinanceTransferHeap } from "@alf/models/transfers/finance-transfer-heap";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceTransferHeapSerializer implements Serializer<FinanceTransferHeap> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FinanceTransferHeap
    deserialize(data: any): FinanceTransferHeap | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.periodType = TransferHeapPeriodType[copy.periodType];

        copy.created = new Date(copy.created);

        if (copy.runDate !== undefined)
            copy.runDate = new Date(copy.runDate);

        copy.heapType = FinanceTransferHeapType[copy.heapType];

        copy.actionLog = (copy.actionLog || []).map(new FinanceTransferHeapActionSerializer().deserialize);

        copy.status = FinanceTransferHeapStatus[copy.status];

        if (copy.transferred !== undefined)
            copy.transferred = new Date(copy.transferred);

        copy.parameters = new FinanceSystemMetadataSerializer().deserialize(copy.parameters);

        return new FinanceTransferHeap(copy);
    }

    serialize(entity: FinanceTransferHeap | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FinanceTransferHeap, _forceTypeHint?: boolean): any
    serialize(entity: FinanceTransferHeap | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            id: entity.id,
            companyId: entity.companyId,
            heapNumber: entity.heapNumber,
            periodNumber: entity.periodNumber,
            periodId: entity.periodId,
            periodTerm: entity.periodTerm,
            periodMonth: entity.periodMonth,
            periodType: TransferHeapPeriodType[entity.periodType],
            accountingPeriod: entity.accountingPeriod,
            created: entity.created
                ? entity.created.toISOString()
                : undefined,
            runDate: entity.runDate
                ? entity.runDate.toISOString()
                : undefined,
            heapType: FinanceTransferHeapType[entity.heapType],
            financeSystemId: entity.financeSystemId,
            actionLog: entity.actionLog
                ? entity.actionLog.map(e => new FinanceTransferHeapActionSerializer().serialize(e, _forceTypeHint))
                : undefined,
            totalDebet: entity.totalDebet,
            totalCredit: entity.totalCredit,
            numberOfPostingTransactions: entity.numberOfPostingTransactions,
            numberOfDepositionTransactions: entity.numberOfDepositionTransactions,
            numberOfAdditionalDepositionTransactions: entity.numberOfAdditionalDepositionTransactions,
            numberOfNonMonetarySizeTransactions: entity.numberOfNonMonetarySizeTransactions,
            canBeSetAsOfficialHeap: entity.canBeSetAsOfficialHeap,
            description: entity.description,
            numberOfTransactions: entity.numberOfTransactions,
            userId: entity.userId,
            status: FinanceTransferHeapStatus[entity.status],
            headStatus: entity.headStatus,
            jobStatus: entity.jobStatus,
            waitingForJobId: entity.waitingForJobId,
            transferred: entity.transferred
                ? entity.transferred.toISOString()
                : undefined,
            fileStorageId: entity.fileStorageId,
            headReceipt: entity.headReceipt,
            fileReceipt: entity.fileReceipt,
            parameters: new FinanceSystemMetadataSerializer().serialize(entity.parameters, _forceTypeHint),
            areParametersResolved: entity.areParametersResolved,
            isBeingCreated: entity.isBeingCreated
        };
    }
}
