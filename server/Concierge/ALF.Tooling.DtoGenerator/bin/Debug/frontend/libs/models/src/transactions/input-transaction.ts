
import { AttachmentType } from "../internal-file-upload/enums/attachment-type";
import { InternalFileUpload } from "../internal-file-upload/internal-file-upload";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InputTransaction {

    static $name = "InputTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.InputTransaction, ALF.Shared.Dto"

    id: string;
    companyId: string;
    payCodeId?: string;
    payCodeNumber: number;
    periodId: string;
    periodNumber: number;
    employeeId: string;
    employeeNumber: number;
    employmentId?: string;
    transactionSequenceNumber: number;
    objectId?: string;
    createdAt?: Date;
    changedAt?: Date;
    accountingAccount?: any;
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
    companyCarId?: string;
    costDimensionA?: any;
    costDimensionB?: any;
    costDimensionC?: any;
    costDimensionD?: any;
    countryCode?: string;
    customerIdentificationNumber?: string;
    description?: string;
    endDate?: Date;
    hours?: number;
    lockTransactionES4?: number;
    municipalityId?: number;
    organizationId?: string;
    ownerOfDeduction?: number;
    payToAccount?: number;
    positionPercentage?: number;
    principalId?: string;
    principalReference?: string;
    projectDimension1?: any;
    projectDimension2?: any;
    projectDimension3?: any;
    projectDimension4?: any;
    projectDimension5?: any;
    projectDimension6Amount?: any;
    projectDimension6Hours?: any;
    quantity?: number;
    rate?: number;
    regulativeId?: string;
    regulativeBId?: string;
    startDate?: Date;
    taxationRule?: string;
    wageStep?: number;
    wageStepB?: number;
    week?: number;
    payslipText?: string;
    referenceForAttachmentId?: string;
    referenceAttachmentType?: AttachmentType;
    attachments: InternalFileUpload[] = [];

    constructor(data?: Partial<InputTransaction>) {
        Object.assign(this, data);
    }
}
