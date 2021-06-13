
import { WorkItemAction } from "@alf/models/work/work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemNavigationAction extends WorkItemAction {

    static $name = "WorkItemNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemNavigationAction, ALF.Shared.Dto"



    constructor(data?: Partial<WorkItemNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemNavigationAction.typeNameHint;
    }
}
