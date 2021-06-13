
import { AccountingDimensionLookupRule } from "./accounting-dimension-lookup-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AccountingRuleId = string;

export class AccountingRule {

    static $name = "AccountingRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.AccountingRule, ALF.Shared.Dto"

    id: AccountingRuleId;
    companyId: string;
    code: string;
    description?: string;
    bankAccountType: number;
    mvaCode?: string;
    accountingVoucherCode?: string;
    accountingVoucherType?: string;
    rules: { [key: string]: AccountingDimensionLookupRule } = {};
    deleted: boolean;

    constructor(data?: Partial<AccountingRule>) {
        Object.assign(this, data);
    }
}
