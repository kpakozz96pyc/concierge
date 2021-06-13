
import { WorkItemAction } from "@alf/models/work/work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemEditAction extends WorkItemAction {

    static $name = "WorkItemEditAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemEditAction, ALF.Shared.Dto"



    constructor(data?: Partial<WorkItemEditAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemEditAction.typeNameHint;
    }
}
