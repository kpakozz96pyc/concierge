
import { WorkTaskId } from "./work-task";
import { WorkItemEditAction } from "@alf/models/work/work-item-edit-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemWorkTaskEditAction extends WorkItemEditAction {

    static $name = "WorkItemWorkTaskEditAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemWorkTaskEditAction, ALF.Shared.Dto"

    workTaskId: WorkTaskId;

    constructor(data?: Partial<WorkItemWorkTaskEditAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemWorkTaskEditAction.typeNameHint;
    }
}
