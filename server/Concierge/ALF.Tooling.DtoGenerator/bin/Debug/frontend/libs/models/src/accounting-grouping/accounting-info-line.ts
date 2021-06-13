

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingInfoLine {

    static $name = "AccountingInfoLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.AccountingInfoLine, ALF.Shared.Dto"

    $type: string;
    accountingRuleId?: string;
    autoAccountingType?: string;
    accountId?: string;
    activityId?: any;
    dimensionA?: string;
    dimensionB?: string;
    dimensionC?: string;
    dimensionD?: string;
    amount: number;
    payCodeId?: string;
    isPartOfSum: boolean;

    constructor(data?: Partial<AccountingInfoLine>) {
        Object.assign(this, data);
    }
}
