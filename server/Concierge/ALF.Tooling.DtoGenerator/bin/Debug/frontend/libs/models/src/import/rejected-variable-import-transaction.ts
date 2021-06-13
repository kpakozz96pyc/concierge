

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type RejectedVariableImportTransactionId = string;

export class RejectedVariableImportTransaction {

    static $name = "RejectedVariableImportTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.RejectedVariableImportTransaction, ALF.Shared.Dto"

    id: RejectedVariableImportTransactionId;
    companyId?: string;
    heapNumber: number;
    periodNumber?: string;
    employeeNumber?: string;
    payCodeNumber?: string;
    transactionSequenceNumber?: string;
    rejectionMessage?: string;
    positionCode?: string;
    employmentSequenceNumber?: string;
    startDate?: string;
    endDate?: string;
    appendix?: string;
    description?: string;
    organizationId?: string;
    week?: string;
    quantity?: string;
    hours?: string;
    rate?: string;
    amount?: string;
    accountingCodeId?: string;
    accountingAccount?: string;
    costDimensionA?: string;
    costDimensionB?: string;
    costDimensionC?: string;
    costDimensionD?: string;
    projectDimension1?: string;
    projectDimension2?: string;
    projectDimension3?: string;
    projectDimension4?: string;
    projectDimension5?: string;
    projectDimension6Amount?: string;
    projectDimension6Hours?: string;
    accountingLedgerType?: string;
    accountingCodeVat?: string;
    appendixCodeAccounting?: string;
    appendixTypeAccounting?: string;
    codeAccountNumber?: string;
    ownerOfDeduction?: string;
    municipalityId?: string;
    regulativeId?: string;
    wageStep?: string;
    regulativeBId?: string;
    wageStepB?: string;
    positionPercentage?: string;
    approvedBy?: string;
    approvedOn?: string;
    authorizedBy?: string;
    authorizedOn?: string;
    note?: string;
    countryCode?: string;
    principalId?: string;
    principalReference?: string;
    postalCode?: string;
    payrollPeriodRetroPay?: string;
    linkId?: string;
    lockTransactionES4?: string;
    payToAccount?: string;
    userId?: string;
    taxationRule?: string;
    budgetTypeId?: string;
    status?: string;
    companyCarId?: string;
    carSequenceNumber?: string;
    externalUniqueId?: string;
    changedDate?: string;
    changedTime?: string;
    origin?: string;
    transFunction?: string;
    integrationKey1?: string;
    integrationKey2?: string;
    integrationKey3?: string;
    integrationKey4?: string;
    integrationKey5?: string;
    numberOfHours?: string;
    numberOfHoursIndicator?: string;
    operationId?: string;
    changedAtTime?: string;
    objectType?: string;
    objectId?: string;
    objectSequenceNumber?: string;
    organizationIdService?: string;
    positionIdService?: string;
    actCode?: string;
    customerIdentificationNumber?: string;
    jobId?: string;
    externalEmployeeId?: string;

    constructor(data?: Partial<RejectedVariableImportTransaction>) {
        Object.assign(this, data);
    }
}
