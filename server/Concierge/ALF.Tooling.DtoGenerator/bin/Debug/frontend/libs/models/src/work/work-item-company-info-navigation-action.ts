
import { CompanyInfoNavigationDestination } from "./enums/company-info-navigation-destination";
import { CompanyId } from "../core/company";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemCompanyInfoNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemCompanyInfoNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemCompanyInfoNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    destination?: CompanyInfoNavigationDestination;

    constructor(data?: Partial<WorkItemCompanyInfoNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemCompanyInfoNavigationAction.typeNameHint;
    }
}
