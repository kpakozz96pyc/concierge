
import { CompanyId } from "../core/company";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemImmediateManagerFormNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemImmediateManagerFormNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemImmediateManagerFormNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    immediateManagerFormId?: any;

    constructor(data?: Partial<WorkItemImmediateManagerFormNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemImmediateManagerFormNavigationAction.typeNameHint;
    }
}
