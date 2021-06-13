
import { EmployeeNavigationDestination } from "./enums/employee-navigation-destination";
import { CompanyId } from "../core/company";
import { EmployeeId } from "../core/employee";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemEmployeeNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemEmployeeNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemEmployeeNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    employeeId: EmployeeId;
    navigationText?: string;
    destination?: EmployeeNavigationDestination;

    constructor(data?: Partial<WorkItemEmployeeNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemEmployeeNavigationAction.typeNameHint;
    }
}
