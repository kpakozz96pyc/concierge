
import { InputTransaction } from "./input-transaction";
import { PayCodeId } from "../core/pay-code";
import { TransactionFieldInput } from "./transaction-field-input";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionTemplate {

    static $name = "TransactionTemplate";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.TransactionTemplate, ALF.Shared.Dto"

    id: PayCodeId;
    code: number;
    name: string;
    parameters: TransactionFieldInput[] = [];
    transaction?: InputTransaction;
    isPersonalOnly?: boolean;
    allowAttachment: boolean;
    requiredAttachmentInWebTrans: boolean;
    requiredAttachmentInVariableTrans: boolean;
    requiredAttachmentInFixedTrans: boolean;
    employmentId?: string;

    constructor(data?: Partial<TransactionTemplate>) {
        Object.assign(this, data);
    }
}
