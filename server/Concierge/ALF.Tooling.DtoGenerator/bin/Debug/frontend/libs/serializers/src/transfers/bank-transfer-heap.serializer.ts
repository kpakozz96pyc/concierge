import { TransferHeapPeriodType } from "@alf/models/transfers/enums/transfer-heap-period-type";
import { BankTransferHeapType } from "@alf/models/transfers/enums/bank-transfer-heap-type";
import { BankTransferHeapStatus } from "@alf/models/transfers/enums/bank-transfer-heap-status";
import { BankTransferHeapActionSerializer } from "./bank-transfer-heap-action.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { BankTransferHeap } from "@alf/models/transfers/bank-transfer-heap";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferHeapSerializer implements Serializer<BankTransferHeap> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankTransferHeap
    deserialize(data: any): BankTransferHeap | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.periodType = TransferHeapPeriodType[copy.periodType];

        copy.type = BankTransferHeapType[copy.type];

        copy.created = new Date(copy.created);

        copy.actionLog = (copy.actionLog || []).map(new BankTransferHeapActionSerializer().deserialize);

        copy.status = BankTransferHeapStatus[copy.status];

        if (copy.transferred !== undefined)
            copy.transferred = new Date(copy.transferred);

        if (copy.chargeDateBBS !== undefined)
            copy.chargeDateBBS = new Date(copy.chargeDateBBS);

        if (copy.payDateBBS !== undefined)
            copy.payDateBBS = new Date(copy.payDateBBS);

        if (copy.postPayDatePG !== undefined)
            copy.postPayDatePG = new Date(copy.postPayDatePG);

        if (copy.bankPayDatePG !== undefined)
            copy.bankPayDatePG = new Date(copy.bankPayDatePG);

        return new BankTransferHeap(copy);
    }

    serialize(entity: BankTransferHeap | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankTransferHeap, _forceTypeHint?: boolean): any
    serialize(entity: BankTransferHeap | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BankTransferHeap.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            heapNumber: entity.heapNumber,
            periodNumber: entity.periodNumber,
            periodId: entity.periodId,
            periodTerm: entity.periodTerm,
            periodMonth: entity.periodMonth,
            periodType: TransferHeapPeriodType[entity.periodType],
            type: BankTransferHeapType[entity.type],
            created: entity.created
                ? entity.created.toISOString()
                : undefined,
            free1: entity.free1,
            free2: entity.free2,
            free3: entity.free3,
            free4: entity.free4,
            exportFile: entity.exportFile,
            serialNumber: entity.serialNumber,
            actionLog: entity.actionLog
                ? entity.actionLog.map(e => new BankTransferHeapActionSerializer().serialize(e, _forceTypeHint))
                : undefined,
            totalBank: entity.totalBank,
            accountNumberBank: entity.accountNumberBank,
            numberOfPaymentsBank: entity.numberOfPaymentsBank,
            totalForeignBank: entity.totalForeignBank,
            accountNumberForeignBank: entity.accountNumberForeignBank,
            numberOfPaymentsForeignBank: entity.numberOfPaymentsForeignBank,
            totalForeignBankWithCode: entity.totalForeignBankWithCode,
            accountNumberForeignBankWithCode: entity.accountNumberForeignBankWithCode,
            numberOfPaymentsForeignBankWithCode: entity.numberOfPaymentsForeignBankWithCode,
            totalPayment: entity.totalPayment,
            numberOfPayments: entity.numberOfPayments,
            canBeSetAsOfficialHeap: entity.canBeSetAsOfficialHeap,
            hasRejections: entity.hasRejections,
            description: entity.description,
            numberOfTransactions: entity.numberOfTransactions,
            userId: entity.userId,
            status: BankTransferHeapStatus[entity.status],
            headStatus: entity.headStatus,
            jobStatus: entity.jobStatus,
            waitingForJobId: entity.waitingForJobId,
            transferred: entity.transferred
                ? entity.transferred.toISOString()
                : undefined,
            chargeDateBBS: serializeDate(entity.chargeDateBBS),
            payDateBBS: serializeDate(entity.payDateBBS),
            postPayDatePG: serializeDate(entity.postPayDatePG),
            bankPayDatePG: serializeDate(entity.bankPayDatePG),
            fileStorageId: entity.fileStorageId,
            headReceipt: entity.headReceipt,
            fileReceipt: entity.fileReceipt,
            isBeingCreated: entity.isBeingCreated
        };
    }
}
