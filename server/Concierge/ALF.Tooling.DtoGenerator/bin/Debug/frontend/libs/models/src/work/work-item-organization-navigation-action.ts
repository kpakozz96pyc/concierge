
import { OrganizationNavigationDestination } from "./enums/organization-navigation-destination";
import { CompanyId } from "../core/company";
import { OrganizationId } from "../core/organization";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemOrganizationNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemOrganizationNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemOrganizationNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    organizationId: OrganizationId;
    destination?: OrganizationNavigationDestination;

    constructor(data?: Partial<WorkItemOrganizationNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemOrganizationNavigationAction.typeNameHint;
    }
}
