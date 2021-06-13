
import { AbsenceCaseTransactionBase } from "@alf/models/transactions/absence-case-transaction-base";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewAbsenceCaseTransaction extends AbsenceCaseTransactionBase {

    static $name = "NewAbsenceCaseTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCases.Transactions.NewAbsenceCaseTransaction, ALF.Shared.Dto"



    constructor(data?: Partial<NewAbsenceCaseTransaction>) {
        super(data);
        Object.assign(this, data);
        this.$type = NewAbsenceCaseTransaction.typeNameHint;
    }
}
