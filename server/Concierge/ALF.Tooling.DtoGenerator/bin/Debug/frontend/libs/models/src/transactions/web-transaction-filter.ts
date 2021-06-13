
import { FilterDateType } from "../core/enums/filter-date-type";
import { FilterDateCriteria } from "./enums/filter-date-criteria";
import { WebTransactionStatus } from "./enums/web-transaction-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WebTransactionFilterId = string;

export class WebTransactionFilter {

    static $name = "WebTransactionFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.WebTransactionFilter, ALF.Shared.Dto"

    id: WebTransactionFilterId;
    statuses: WebTransactionStatus[] = [];
    itemCount: number;
    dateType: FilterDateType;
    dateCriteria: FilterDateCriteria;
    fromDate?: Date;
    toDate?: Date;
    payCodes: number[] = [];

    constructor(data?: Partial<WebTransactionFilter>) {
        Object.assign(this, data);
    }
}
