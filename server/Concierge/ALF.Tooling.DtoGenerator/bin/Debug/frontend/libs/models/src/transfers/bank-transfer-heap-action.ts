
import { BankTransferHeapActionType } from "./enums/bank-transfer-heap-action-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferHeapAction {

    static $name = "BankTransferHeapAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transfers.BankTransferHeapAction, ALF.Shared.Dto"

    actionType: BankTransferHeapActionType;
    performedAt: Date;
    performedByUserId?: string;
    performedByUsername?: string;
    details?: string;
    fileDownloadTicketId?: string;

    constructor(data?: Partial<BankTransferHeapAction>) {
        Object.assign(this, data);
    }
}
