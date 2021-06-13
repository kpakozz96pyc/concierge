
import { WorkItemAction } from "@alf/models/work/work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferRejectedTransactionMarkAsHandledAction extends WorkItemAction {

    static $name = "BankTransferRejectedTransactionMarkAsHandledAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.BankTransferRejectedTransactionMarkAsHandledAction, ALF.Shared.Dto"

    bankTransferRejectedTransactionId: string;

    constructor(data?: Partial<BankTransferRejectedTransactionMarkAsHandledAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = BankTransferRejectedTransactionMarkAsHandledAction.typeNameHint;
    }
}
