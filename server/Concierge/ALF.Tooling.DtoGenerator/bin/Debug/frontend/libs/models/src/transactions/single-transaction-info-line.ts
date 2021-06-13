
import { DisplayTransactionSourceType } from "./enums/display-transaction-source-type";
import { InputTransactionType } from "./enums/input-transaction-type";
import { NonGroupedTransactionInfoLine } from "@alf/models/transactions/non-grouped-transaction-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleTransactionInfoLine extends NonGroupedTransactionInfoLine {

    static $name = "SingleTransactionInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.SingleTransactionInfoLine, ALF.Shared.Dto"

    sourceType: DisplayTransactionSourceType;
    sourceTranscationId?: string;
    sourceInputTransactionType?: InputTransactionType;
    referencedInputTransactionId?: string;
    referencedInputTransactionType?: InputTransactionType;

    constructor(data?: Partial<SingleTransactionInfoLine>) {
        super(data);
        Object.assign(this, data);
        this.$type = SingleTransactionInfoLine.typeNameHint;
    }
}
