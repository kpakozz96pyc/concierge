
import { CompanyId } from "../core/company";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemAmeldingNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemAmeldingNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemAmeldingNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;

    constructor(data?: Partial<WorkItemAmeldingNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemAmeldingNavigationAction.typeNameHint;
    }
}
