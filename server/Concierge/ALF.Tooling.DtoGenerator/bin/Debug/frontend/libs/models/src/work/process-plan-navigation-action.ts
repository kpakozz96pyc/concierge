
import { CompanyId } from "../core/company";
import { PayrollPeriodId } from "../periods/payroll-period";
import { ProcessPlanId } from "../process/process-plan";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanNavigationAction extends WorkItemNavigationAction {

    static $name = "ProcessPlanNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.ProcessPlanNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    periodId: PayrollPeriodId;
    processPlanId: ProcessPlanId;

    constructor(data?: Partial<ProcessPlanNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessPlanNavigationAction.typeNameHint;
    }
}
