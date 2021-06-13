
import { AccountingViewColumn } from "./enums/accounting-view-column";
import { GroupedAccountingInfoLine } from "./grouped-accounting-info-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingTransactionOverview {

    static $name = "AccountingTransactionOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.AccountingGrouping.AccountingTransactionOverview, ALF.Shared.Dto"

    id?: string;
    employeeId?: string;
    periodIdRangeFrom: string;
    periodIdRangeUntil: string;
    aggregatedColumns: AccountingViewColumn[] = [];
    detailColumns: AccountingViewColumn[] = [];
    hiddenColumns: AccountingViewColumn[] = [];
    lines: GroupedAccountingInfoLine[] = [];

    constructor(data?: Partial<AccountingTransactionOverview>) {
        Object.assign(this, data);
    }
}
