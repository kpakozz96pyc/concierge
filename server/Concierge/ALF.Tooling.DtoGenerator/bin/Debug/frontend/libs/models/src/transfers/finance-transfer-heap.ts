
import { TransferHeapPeriodType } from "./enums/transfer-heap-period-type";
import { FinanceTransferHeapType } from "./enums/finance-transfer-heap-type";
import { FinanceTransferHeapAction } from "./finance-transfer-heap-action";
import { FinanceTransferHeapEditableFields } from "@alf/models/transfers/finance-transfer-heap-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type FinanceTransferHeapId = string;

export class FinanceTransferHeap extends FinanceTransferHeapEditableFields {

    static $name = "FinanceTransferHeap";
    static typeNameHint = "ALF.Shared.Dto.Models.Transfers.FinanceTransferHeap, ALF.Shared.Dto"

    id: FinanceTransferHeapId;
    companyId: string;
    heapNumber: number;
    periodNumber: number;
    periodId?: string;
    periodTerm?: any;
    periodMonth?: any;
    periodType: TransferHeapPeriodType;
    accountingPeriod: number;
    created: Date;
    runDate?: Date;
    heapType: FinanceTransferHeapType;
    financeSystemId: number;
    actionLog: FinanceTransferHeapAction[] = [];
    totalDebet: number;
    totalCredit: number;
    numberOfPostingTransactions: number;
    numberOfDepositionTransactions: number;
    numberOfAdditionalDepositionTransactions: number;
    numberOfNonMonetarySizeTransactions: number;
    canBeSetAsOfficialHeap: boolean;

    constructor(data?: Partial<FinanceTransferHeap>) {
        super(data);
        Object.assign(this, data);
        this.$type = FinanceTransferHeap.typeNameHint;
    }
}
