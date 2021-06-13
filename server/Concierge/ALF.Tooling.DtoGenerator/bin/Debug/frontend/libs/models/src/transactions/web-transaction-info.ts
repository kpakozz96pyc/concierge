
import { WebTransactionStatus } from "./enums/web-transaction-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WebTransactionInfoId = string;

export class WebTransactionInfo {

    static $name = "WebTransactionInfo";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.WebTransactionInfo, ALF.Shared.Dto"

    id: WebTransactionInfoId;
    payCodeNumber: number;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    employeeId: number;
    quantity?: number;
    amount?: number;
    hours?: number;
    rate?: number;
    status: WebTransactionStatus;
    employeeName?: string;

    constructor(data?: Partial<WebTransactionInfo>) {
        Object.assign(this, data);
    }
}
