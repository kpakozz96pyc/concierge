
import { EmployeeId } from "../core/employee";
import { PayrollPeriodId } from "../periods/payroll-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RecalculateOverviewJobAction {

    static $name = "RecalculateOverviewJobAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.RecalculateOverviewJobAction, ALF.Shared.Dto"

    employeeId: EmployeeId;
    periodId: PayrollPeriodId;

    constructor(data?: Partial<RecalculateOverviewJobAction>) {
        Object.assign(this, data);
    }
}
