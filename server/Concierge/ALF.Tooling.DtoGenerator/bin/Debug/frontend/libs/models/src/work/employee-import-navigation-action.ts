
import { EmployeeImportId } from "../import/employee-import";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportNavigationAction extends WorkItemNavigationAction {

    static $name = "EmployeeImportNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.EmployeeImportNavigationAction, ALF.Shared.Dto"

    importId: EmployeeImportId;

    constructor(data?: Partial<EmployeeImportNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = EmployeeImportNavigationAction.typeNameHint;
    }
}
