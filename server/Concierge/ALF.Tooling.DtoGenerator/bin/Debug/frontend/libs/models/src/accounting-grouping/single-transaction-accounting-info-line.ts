
import { AccountingInfoLine } from "@alf/models/accounting-grouping/accounting-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleTransactionAccountingInfoLine extends AccountingInfoLine {

    static $name = "SingleTransactionAccountingInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.SingleTransactionAccountingInfoLine, ALF.Shared.Dto"

    description?: string;
    accountingTransactionId?: string;
    outputTransactionId?: string;

    constructor(data?: Partial<SingleTransactionAccountingInfoLine>) {
        super(data);
        Object.assign(this, data);
        this.$type = SingleTransactionAccountingInfoLine.typeNameHint;
    }
}
