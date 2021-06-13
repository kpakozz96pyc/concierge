
import { SingleTransactionInfoLine } from "./single-transaction-info-line";
import { NonGroupedTransactionInfoLine } from "@alf/models/transactions/non-grouped-transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SplitTransactionInfoLine extends NonGroupedTransactionInfoLine {

    static $name = "SplitTransactionInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.SplitTransactionInfoLine, ALF.Shared.Dto"

    splitInto: SingleTransactionInfoLine[] = [];

    constructor(data?: Partial<SplitTransactionInfoLine>) {
        super(data);
        Object.assign(this, data);
        this.$type = SplitTransactionInfoLine.typeNameHint;
    }
}
