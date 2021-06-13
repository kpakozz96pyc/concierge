
import { FinanceTransferHeapActionType } from "./enums/finance-transfer-heap-action-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceTransferHeapAction {

    static $name = "FinanceTransferHeapAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transfers.FinanceTransferHeapAction, ALF.Shared.Dto"

    actionType: FinanceTransferHeapActionType;
    performedAt: Date;
    performedByUserId?: string;
    performedByUsername?: string;
    details?: string;
    fileDownloadTicketId?: string;

    constructor(data?: Partial<FinanceTransferHeapAction>) {
        Object.assign(this, data);
    }
}
