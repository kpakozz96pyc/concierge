
import { AbsenceCaseAccountingTransactionType } from "./enums/absence-case-accounting-transaction-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AbsenceCaseAccountingTransactionId = string;

export class AbsenceCaseAccountingTransaction {

    static $name = "AbsenceCaseAccountingTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCases.AccountingTransactions.AbsenceCaseAccountingTransaction, ALF.Shared.Dto"

    id: AbsenceCaseAccountingTransactionId;
    companyId?: string;
    employeeId?: string;
    from: Date;
    to: Date;
    amount: number;
    accountingCode?: string;
    accountId?: any;
    dimensionA?: any;
    dimensionB?: any;
    dimensionC?: any;
    dimensionD?: any;
    projectDimension1?: any;
    projectDimension2?: any;
    projectDimension3?: any;
    projectDimension4?: any;
    projectDimension5?: any;
    projectDimension6Amount?: any;
    projectDimension6Hours?: any;
    bankAccountType: number;
    mvaCode?: string;
    accountingVoucherCode?: string;
    accountingVoucherType?: string;
    transferedToAccountingDate?: Date;
    accountingType: AbsenceCaseAccountingTransactionType;
    absenceCaseTransactionId?: any;
    accountingPeriod: number;
    employersTaxZone: number;

    constructor(data?: Partial<AbsenceCaseAccountingTransaction>) {
        Object.assign(this, data);
    }
}
