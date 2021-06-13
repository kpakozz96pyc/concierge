
import { AbsenceCaseTransactionBase } from "@alf/models/transactions/absence-case-transaction-base";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AbsenceCaseTransactionId = string;

export class AbsenceCaseTransaction extends AbsenceCaseTransactionBase {

    static $name = "AbsenceCaseTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCases.Transactions.AbsenceCaseTransaction, ALF.Shared.Dto"

    id: AbsenceCaseTransactionId;
    isSentToAccounting: boolean;

    constructor(data?: Partial<AbsenceCaseTransaction>) {
        super(data);
        Object.assign(this, data);
        this.$type = AbsenceCaseTransaction.typeNameHint;
    }
}
