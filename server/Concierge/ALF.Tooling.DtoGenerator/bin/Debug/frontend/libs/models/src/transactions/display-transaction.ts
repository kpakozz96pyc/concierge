
import { DisplayTransactionSourceType } from "./enums/display-transaction-source-type";
import { InputTransactionType } from "./enums/input-transaction-type";
import { InternalFileUpload } from "../internal-file-upload/internal-file-upload";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type DisplayTransactionId = string;

export class DisplayTransaction {

    static $name = "DisplayTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.DisplayTransaction, ALF.Shared.Dto"

    id: DisplayTransactionId;
    sourceType: DisplayTransactionSourceType;
    referencedInputTransactionId?: string;
    inputTransactionType: InputTransactionType;
    companyId: string;
    payCodeId: string;
    payCodeNumber: number;
    periodId?: string;
    periodNumber: number;
    employeeId: string;
    employeeNumber: number;
    isPersonal: boolean;
    employmentId?: string;
    accountingAccount?: string;
    accountingCodeId?: string;
    accountingCodeVat?: string;
    accountingLedgerType?: number;
    activityCode?: string;
    amount?: number;
    appendix?: string;
    appendixCodeAccounting?: string;
    appendixTypeAccounting?: string;
    approvedBy?: string;
    approvedOn?: Date;
    authorizedBy?: string;
    authorizedOn?: Date;
    changedAt?: Date;
    companyCarId?: string;
    costDimensionA?: string;
    costDimensionB?: string;
    costDimensionC?: string;
    costDimensionD?: string;
    countryCode?: string;
    createdAt?: Date;
    customerIdentificationNumber?: string;
    description?: string;
    endDate?: Date;
    hours?: number;
    lockTransactionES4?: number;
    municipalityId?: number;
    objectId?: string;
    organizationId?: string;
    ownerOfDeduction?: number;
    payToAccount?: number;
    positionPercentage?: number;
    principalId?: string;
    principalReference?: string;
    projectDimension1?: string;
    projectDimension2?: string;
    projectDimension3?: string;
    projectDimension4?: string;
    projectDimension5?: string;
    projectDimension6Amount?: string;
    projectDimension6Hours?: string;
    quantity?: number;
    rate?: number;
    regulativeBId?: string;
    regulativeId?: string;
    startDate?: Date;
    taxationRule?: string;
    transactionSequenceNumber: number;
    wageStep?: number;
    wageStepB?: number;
    week?: number;
    payslipText?: string;
    attachments: InternalFileUpload[] = [];

    constructor(data?: Partial<DisplayTransaction>) {
        Object.assign(this, data);
    }
}
