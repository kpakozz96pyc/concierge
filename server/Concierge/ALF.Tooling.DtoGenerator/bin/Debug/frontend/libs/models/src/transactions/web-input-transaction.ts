
import { WebTransactionType } from "./enums/web-transaction-type";
import { WebTransactionOrigin } from "./enums/web-transaction-origin";
import { WebTransactionStatus } from "./enums/web-transaction-status";
import { AttachmentType } from "../internal-file-upload/enums/attachment-type";
import { InternalFileUpload } from "../internal-file-upload/internal-file-upload";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WebInputTransactionId = string;

export class WebInputTransaction {

    static $name = "WebInputTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.WebInputTransaction, ALF.Shared.Dto"

    id: WebInputTransactionId;
    transactionId: number;
    companyId: string;
    employeeId: string;
    employeeNumber: number;
    type: WebTransactionType;
    payCodeId: string;
    payCodeNumber: number;
    transactionSequenceNumber: number;
    employmentId?: string;
    changedBy?: string;
    changedDate?: Date;
    registrationOrigin: WebTransactionOrigin;
    customerIdentificationNumber?: string;
    isInputTransaction: boolean;
    generatedFromTransactionId: number;
    isTimeOffRequested: boolean;
    weekLineSequenceNumber: number;
    heapNumber: number;
    importDate: number;
    importUser?: string;
    status: WebTransactionStatus;
    startDate?: Date;
    endDate?: Date;
    appendix?: string;
    description?: string;
    payslipText?: string;
    projectDimension1?: any;
    projectDimension2?: any;
    projectDimension3?: any;
    projectDimension4?: any;
    projectDimension5?: any;
    projectDimension6Amount?: any;
    projectDimension6Hours?: any;
    costDimensionA?: any;
    costDimensionB?: any;
    costDimensionC?: any;
    costDimensionD?: any;
    activityCode?: string;
    accountingCodeId?: string;
    accountingAccount?: any;
    taxationRule?: string;
    hours: number;
    rate: number;
    amount: number;
    week: number;
    quantity: number;
    approvedBy?: string;
    approvedDate?: Date;
    authorizedBy?: string;
    authorizedDate?: Date;
    referenceForAttachmentId?: string;
    referenceAttachmentType?: AttachmentType;
    attachments: InternalFileUpload[] = [];

    constructor(data?: Partial<WebInputTransaction>) {
        Object.assign(this, data);
    }
}
