
import { AbsenceCaseTransactionType } from "./enums/absence-case-transaction-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseTransactionBase {

    static $name = "AbsenceCaseTransactionBase";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCases.Transactions.AbsenceCaseTransactionBase, ALF.Shared.Dto"

    $type: string;
    companyId?: string;
    employeeId?: string;
    from: Date;
    to: Date;
    dailyAmount: number;
    amount: number;
    type: AbsenceCaseTransactionType;
    negatesTransactionId?: any;
    absenceCaseId?: any;
    incomeReportId?: any;
    sicknessBenefitApplicationId?: any;
    reimbursementReceiptLineId?: any;
    targetAbsenceCaseId?: any;

    constructor(data?: Partial<AbsenceCaseTransactionBase>) {
        Object.assign(this, data);
    }
}
