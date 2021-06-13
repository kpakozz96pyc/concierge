
import { CompanyId } from "../core/company";
import { PayrollPeriodId } from "../periods/payroll-period";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualProcessNavigationAction extends WorkItemNavigationAction {

    static $name = "ManualProcessNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.ManualProcessNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    periodId: PayrollPeriodId;

    constructor(data?: Partial<ManualProcessNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualProcessNavigationAction.typeNameHint;
    }
}
