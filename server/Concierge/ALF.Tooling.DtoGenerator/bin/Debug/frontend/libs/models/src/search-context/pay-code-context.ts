
import { InputTransactionType } from "../transactions/enums/input-transaction-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeContext {

    static $name = "PayCodeContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.PayCodeContext, ALF.Shared.Dto"

    isBalance?: boolean;
    transactionType?: InputTransactionType;

    constructor(data?: Partial<PayCodeContext>) {
        Object.assign(this, data);
    }
}
