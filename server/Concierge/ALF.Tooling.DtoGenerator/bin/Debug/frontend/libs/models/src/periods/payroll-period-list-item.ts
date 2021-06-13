
import { PeriodStatus } from "./enums/period-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PayrollPeriodListItemId = string;

export class PayrollPeriodListItem {

    static $name = "PayrollPeriodListItem";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.PayrollPeriodListItem, ALF.Shared.Dto"

    id: PayrollPeriodListItemId;
    companyId: string;
    periodId: number;
    description: string;
    year: number;
    month: number;
    status: PeriodStatus;
    periodState?: string;
    statusDate: Date;
    payDate: Date;

    constructor(data?: Partial<PayrollPeriodListItem>) {
        Object.assign(this, data);
    }
}
