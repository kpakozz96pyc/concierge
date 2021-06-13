
import { InputTransactionType } from "./enums/input-transaction-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type OutputTransactionId = string;

export class OutputTransaction {

    static $name = "OutputTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.OutputTransaction, ALF.Shared.Dto"

    id: OutputTransactionId;
    payCodeNumber: number;
    periodId?: string;
    periodNumber: number;
    employeeId?: string;
    companyId?: string;
    employmentId?: string;
    payCodeId?: string;
    calculatedFromInputTransactionType?: InputTransactionType;
    calculatedFromTransactionId?: string;
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
    changedAt?: Date;
    companyCarId?: string;
    costDimensionA?: any;
    costDimensionB?: any;
    costDimensionC?: any;
    costDimensionD?: any;
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
    transactionSequenceNumber: number;
    wageStep?: number;
    wageStepB?: number;
    week?: number;

    constructor(data?: Partial<OutputTransaction>) {
        Object.assign(this, data);
    }
}
