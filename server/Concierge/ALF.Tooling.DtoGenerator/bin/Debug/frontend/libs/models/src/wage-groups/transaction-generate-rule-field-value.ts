
import { TransactionGenerateRuleFieldValueType } from "./enums/transaction-generate-rule-field-value-type";
import { TransactionGenerateRuleId } from "./transaction-generate-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionGenerateRuleFieldValue {

    static $name = "TransactionGenerateRuleFieldValue";
    static typeNameHint = "ALF.Shared.Dto.Models.WageGroups.TransactionGenerateRuleFieldValue, ALF.Shared.Dto"

    transactionGenerateRuleId: TransactionGenerateRuleId;
    forFieldNumber: number;
    valueResolveType: TransactionGenerateRuleFieldValueType;
    value?: any;
    lookupFromTableNumber?: number;
    lookupFromFieldNumber?: number;

    constructor(data?: Partial<TransactionGenerateRuleFieldValue>) {
        Object.assign(this, data);
    }
}
