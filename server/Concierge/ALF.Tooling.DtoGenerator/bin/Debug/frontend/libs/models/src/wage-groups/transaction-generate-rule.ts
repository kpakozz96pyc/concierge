
import { GenerateTransactionFor } from "./enums/generate-transaction-for";
import { TransactionGenerateRuleFieldValue } from "./transaction-generate-rule-field-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TransactionGenerateRuleId = string;

export class TransactionGenerateRule {

    static $name = "TransactionGenerateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.WageGroups.TransactionGenerateRule, ALF.Shared.Dto"

    id: TransactionGenerateRuleId;
    companyId: string;
    wageGroupId?: string;
    payCodeNumber: number;
    name?: string;
    description?: string;
    generateTransactionFor: GenerateTransactionFor;
    validFrom?: Date;
    validUntil?: Date;
    fieldValues: TransactionGenerateRuleFieldValue[] = [];

    constructor(data?: Partial<TransactionGenerateRule>) {
        Object.assign(this, data);
    }
}
