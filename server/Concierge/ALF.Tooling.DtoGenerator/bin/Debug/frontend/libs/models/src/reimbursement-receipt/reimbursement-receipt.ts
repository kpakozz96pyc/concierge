
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { ReimbursementReceiptStatus } from "./enums/reimbursement-receipt-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReimbursementReceiptId = string;

export class ReimbursementReceipt {

    static $name = "ReimbursementReceipt";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.ReimbursementReceipt.ReimbursementReceipt, ALF.Shared.Dto"

    id: ReimbursementReceiptId;
    messageId?: any;
    companyId?: string;
    createdAt: Date;
    mode: AltinnBackend;
    isActive: boolean;
    isProcessing: boolean;
    hasError: boolean;
    status: ReimbursementReceiptStatus;
    isAbandoned: boolean;
    errorId?: string;
    errorMessage?: string;
    waitingForJobId?: string;
    sum: number;
    numberOfLines: number;
    numberOfDoneLines: number;

    constructor(data?: Partial<ReimbursementReceipt>) {
        Object.assign(this, data);
    }
}
