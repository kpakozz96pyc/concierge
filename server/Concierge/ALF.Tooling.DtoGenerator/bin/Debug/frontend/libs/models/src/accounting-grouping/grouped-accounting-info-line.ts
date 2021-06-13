
import { SingleTransactionAccountingInfoLine } from "./single-transaction-accounting-info-line";
import { AccountingInfoLine } from "@alf/models/accounting-grouping/accounting-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GroupedAccountingInfoLine extends AccountingInfoLine {

    static $name = "GroupedAccountingInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.GroupedAccountingInfoLine, ALF.Shared.Dto"

    transactions: SingleTransactionAccountingInfoLine[] = [];

    constructor(data?: Partial<GroupedAccountingInfoLine>) {
        super(data);
        Object.assign(this, data);
        this.$type = GroupedAccountingInfoLine.typeNameHint;
    }
}
