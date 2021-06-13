
import { TransferHeapPeriodType } from "./enums/transfer-heap-period-type";
import { BankTransferHeapType } from "./enums/bank-transfer-heap-type";
import { BankTransferHeapStatus } from "./enums/bank-transfer-heap-status";
import { BankTransferHeapHeadStatus } from "./enums/bank-transfer-heap-head-status";
import { BankTransferHeapJobStatus } from "./enums/bank-transfer-heap-job-status";
import { BankTransferHeapAction } from "./bank-transfer-heap-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type BankTransferHeapId = string;

export class BankTransferHeap {

    static $name = "BankTransferHeap";
    static typeNameHint = "ALF.Shared.Dto.Models.Transfers.BankTransferHeap, ALF.Shared.Dto"

    id: BankTransferHeapId;
    companyId: string;
    heapNumber: number;
    periodNumber: number;
    periodId?: string;
    periodTerm?: any;
    periodMonth?: any;
    periodType: TransferHeapPeriodType;
    type: BankTransferHeapType;
    created: Date;
    free1: string;
    free2: string;
    free3: string;
    free4: string;
    exportFile: string;
    serialNumber: number;
    actionLog: BankTransferHeapAction[] = [];
    totalBank: number;
    accountNumberBank?: string;
    numberOfPaymentsBank: number;
    totalForeignBank: number;
    accountNumberForeignBank?: string;
    numberOfPaymentsForeignBank: number;
    totalForeignBankWithCode: number;
    accountNumberForeignBankWithCode?: string;
    numberOfPaymentsForeignBankWithCode: number;
    totalPayment: number;
    numberOfPayments: number;
    canBeSetAsOfficialHeap: boolean;
    hasRejections: boolean;
    description: string;
    numberOfTransactions: number;
    userId: string;
    status: BankTransferHeapStatus;
    headStatus?: BankTransferHeapHeadStatus;
    jobStatus?: BankTransferHeapJobStatus;
    waitingForJobId?: string;
    transferred?: Date;
    chargeDateBBS?: Date;
    payDateBBS?: Date;
    postPayDatePG?: Date;
    bankPayDatePG?: Date;
    fileStorageId?: string;
    headReceipt?: string;
    fileReceipt?: string;
    isBeingCreated: boolean;

    constructor(data?: Partial<BankTransferHeap>) {
        Object.assign(this, data);
    }
}
