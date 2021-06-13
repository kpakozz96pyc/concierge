
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferHeapNavigationAction extends WorkItemNavigationAction {

    static $name = "BankTransferHeapNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.BankTransferHeapNavigationAction, ALF.Shared.Dto"

    companyId?: string;
    heapId?: string;

    constructor(data?: Partial<BankTransferHeapNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = BankTransferHeapNavigationAction.typeNameHint;
    }
}
