
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { ReimbursementReceiptType } from "./enums/reimbursement-receipt-type";
import { ReimbursementReceiptLineStatus } from "./enums/reimbursement-receipt-line-status";
import { EmployeeResolveError } from "../absence/enums/employee-resolve-error";
import { AbsenceCaseResolveError } from "./enums/absence-case-resolve-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReimbursementReceiptLineId = string;

export class ReimbursementReceiptLine {

    static $name = "ReimbursementReceiptLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.ReimbursementReceipt.ReimbursementReceiptLine, ALF.Shared.Dto"

    id: ReimbursementReceiptLineId;
    mode: AltinnBackend;
    socialSecurityNumber?: string;
    name?: string;
    organizationCode?: string;
    companySubNumber: number;
    receiptType: ReimbursementReceiptType;
    startDate: Date;
    endDate: Date;
    maximumReimbursementAmountEndDate?: Date;
    amount: number;
    accountNumber?: string;
    reimbursementReceiptId?: any;
    companyId: string;
    createdAt: Date;
    isActive: boolean;
    isProcessing: boolean;
    hasError: boolean;
    employeeId?: string;
    errorId?: string;
    errorMessage?: string;
    status: ReimbursementReceiptLineStatus;
    waitingForJobId?: string;
    resolveEmployeeError?: EmployeeResolveError;
    absenceCaseId?: any;
    resolveAbsenceCaseError?: AbsenceCaseResolveError;
    isAbandoned: boolean;
    isTypeIrrelevant: boolean;

    constructor(data?: Partial<ReimbursementReceiptLine>) {
        Object.assign(this, data);
    }
}
