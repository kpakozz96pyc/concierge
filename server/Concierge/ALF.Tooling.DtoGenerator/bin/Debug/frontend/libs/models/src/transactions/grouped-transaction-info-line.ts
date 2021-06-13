
import { NonGroupedTransactionInfoLine } from "./non-grouped-transaction-info-line";
import { TransactionInfoLine } from "@alf/models/transactions/transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GroupedTransactionInfoLine extends TransactionInfoLine {

    static $name = "GroupedTransactionInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.GroupedTransactionInfoLine, ALF.Shared.Dto"

    infoLines: NonGroupedTransactionInfoLine[] = [];

    constructor(data?: Partial<GroupedTransactionInfoLine>) {
        super(data);
        Object.assign(this, data);
        this.$type = GroupedTransactionInfoLine.typeNameHint;
    }
}
