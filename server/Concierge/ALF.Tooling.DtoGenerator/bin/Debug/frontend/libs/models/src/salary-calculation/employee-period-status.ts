
import { EmployeeSalaryCalculationOverview } from "./employee-salary-calculation-overview";
import { ControlResultOverview } from "./control-result-overview";
import { EmployeeId } from "../core/employee";
import { PayrollPeriodId } from "../periods/payroll-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeePeriodStatusId = string;

export class EmployeePeriodStatus {

    static $name = "EmployeePeriodStatus";
    static typeNameHint = "ALF.Shared.Dto.Models.SalaryCalculation.EmployeePeriodStatus, ALF.Shared.Dto"

    id: EmployeePeriodStatusId;
    employeeId: EmployeeId;
    periodId: PayrollPeriodId;
    salaryCalculationOverview: EmployeeSalaryCalculationOverview;
    controlResultOverview: ControlResultOverview;

    constructor(data?: Partial<EmployeePeriodStatus>) {
        Object.assign(this, data);
    }
}
