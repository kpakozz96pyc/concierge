
import { PeriodStatus } from "./enums/period-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PrepayPeriodListItemId = string;

export class PrepayPeriodListItem {

    static $name = "PrepayPeriodListItem";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.PrepayPeriodListItem, ALF.Shared.Dto"

    id: PrepayPeriodListItemId;
    companyId: string;
    periodNumber: number;
    description: string;
    year: number;
    month: number;
    status: PeriodStatus;

    constructor(data?: Partial<PrepayPeriodListItem>) {
        Object.assign(this, data);
    }
}
