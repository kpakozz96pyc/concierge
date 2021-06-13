
import { TransactionInfoLine } from "./transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionInfoGroup {

    static $name = "TransactionInfoGroup";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.TransactionInfoGroup, ALF.Shared.Dto"

    title?: string;
    subTitle?: string;
    hiredDate?: string;
    terminatedDate?: string;
    payingTransactionInfoLines: TransactionInfoLine[] = [];
    sumPayingTransactionInfoLines?: number;
    deductionTransactionInfoLines: TransactionInfoLine[] = [];
    sumDeductionTransactionInfoLines?: number;

    constructor(data?: Partial<TransactionInfoGroup>) {
        Object.assign(this, data);
    }
}
