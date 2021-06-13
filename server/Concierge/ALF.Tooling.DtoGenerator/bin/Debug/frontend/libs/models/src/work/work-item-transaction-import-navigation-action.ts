
import { CompanyId } from "../core/company";
import { VariableTransactionImportId } from "../import/variable-transaction-import";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemTransactionImportNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemTransactionImportNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemTransactionImportNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    importId: VariableTransactionImportId;

    constructor(data?: Partial<WorkItemTransactionImportNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemTransactionImportNavigationAction.typeNameHint;
    }
}
