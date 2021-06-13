

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AccountingRuleCopyParametersId = string;

export class AccountingRuleCopyParameters {

    static $name = "AccountingRuleCopyParameters";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.AccountingRuleCopyParameters, ALF.Shared.Dto"

    copyFromId: AccountingRuleCopyParametersId;
    copyToAccountingRuleCode?: string;
    description?: string;

    constructor(data?: Partial<AccountingRuleCopyParameters>) {
        Object.assign(this, data);
    }
}
