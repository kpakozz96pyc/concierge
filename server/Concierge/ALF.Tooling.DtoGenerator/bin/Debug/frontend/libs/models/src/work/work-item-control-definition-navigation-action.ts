
import { ControlDefinitionId } from "../control/control-definition";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemControlDefinitionNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemControlDefinitionNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemControlDefinitionNavigationAction, ALF.Shared.Dto"

    controlDefinitionId: ControlDefinitionId;

    constructor(data?: Partial<WorkItemControlDefinitionNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemControlDefinitionNavigationAction.typeNameHint;
    }
}
