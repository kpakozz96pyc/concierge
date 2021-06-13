
import { PayrollPeriodId } from "../periods/payroll-period";
import { TransactionInfoLine } from "@alf/models/transactions/transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NonGroupedTransactionInfoLine extends TransactionInfoLine {

    static $name = "NonGroupedTransactionInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.NonGroupedTransactionInfoLine, ALF.Shared.Dto"

    periodId: PayrollPeriodId;

    constructor(data?: Partial<NonGroupedTransactionInfoLine>) {
        super(data);
        Object.assign(this, data);
        this.$type = NonGroupedTransactionInfoLine.typeNameHint;
    }
}
