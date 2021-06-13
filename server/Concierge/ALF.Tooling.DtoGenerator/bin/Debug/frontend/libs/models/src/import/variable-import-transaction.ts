

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type VariableImportTransactionId = string;

export class VariableImportTransaction {

    static $name = "VariableImportTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.VariableImportTransaction, ALF.Shared.Dto"

    id: VariableImportTransactionId;
    companyId: string;
    heapNumber: number;
    periodNumber: number;
    employeeNumber: number;
    payCodeNumber: number;
    transactionSequenceNumber: number;
    employeeId?: string;
    startDate?: Date;
    endDate?: Date;
    appendix?: string;
    description?: string;
    organizationId?: string;
    week?: number;
    quantity?: number;
    hours?: number;
    rate?: number;
    amount?: number;
    accountingCodeId?: string;
    accountingAccount?: any;
    costDimensionA?: any;
    costDimensionB?: any;
    costDimensionC?: any;
    costDimensionD?: any;
    projectDimension1?: any;
    projectDimension2?: any;
    projectDimension3?: any;
    projectDimension4?: any;
    projectDimension5?: any;
    projectDimension6Amount?: any;
    projectDimension6Hours?: any;
    accountingLedgerType?: number;
    accountingCodeVat?: string;
    appendixCodeAccounting?: string;
    appendixTypeAccounting?: string;
    codeAccountNumber?: number;
    ownerOfDeduction?: number;
    municipalityId?: number;
    employmentId?: string;
    regulativeId?: string;
    wageStep?: number;
    regulativeBId?: string;
    wageStepB?: number;
    positionPercentage?: number;
    approvedBy?: string;
    approvedOn?: Date;
    authorizedBy?: string;
    authorizedOn?: Date;
    note?: number;
    countryCode?: string;
    principalId?: string;
    principalReference?: string;
    postalCode?: number;
    payrollPeriodRetroPay?: number;
    linkId?: string;
    lockTransactionES4?: number;
    payToAccount?: number;
    userId?: string;
    taxationRule?: string;
    budgetTypeId?: string;
    status?: number;
    companyCarId?: string;
    carSequenceNumber?: number;
    externalUniqueId?: string;
    changedAt?: Date;
    origin?: string;
    transFunction?: string;
    integrationKey1?: string;
    integrationKey2?: string;
    integrationKey3?: string;
    integrationKey4?: string;
    integrationKey5?: string;
    numberOfHours?: number;
    numberOfHoursIndicator?: string;
    operationId?: string;
    objectType?: string;
    objectId?: string;
    objectSequenceNumber?: number;
    organizationIdService?: string;
    positionIdService?: string;
    actCode?: string;
    customerIdentificationNumber?: string;
    jobId?: string;
    externalEmployeeId?: string;

    constructor(data?: Partial<VariableImportTransaction>) {
        Object.assign(this, data);
    }
}
