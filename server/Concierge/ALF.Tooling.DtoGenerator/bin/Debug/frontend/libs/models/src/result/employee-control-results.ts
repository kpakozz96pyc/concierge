
import { EmployeeId } from "../core/employee";
import { PayrollPeriodId } from "../periods/payroll-period";
import { EmployeeControlResult } from "./employee-control-result";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeControlResultsId = string;

export class EmployeeControlResults {

    static $name = "EmployeeControlResults";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.Result.EmployeeControlResults, ALF.Shared.Dto"

    id: EmployeeControlResultsId;
    companyId?: string;
    employeeId: EmployeeId;
    employeeNumber: number;
    periodId: PayrollPeriodId;
    periodNumber: number;
    details: EmployeeControlResult[] = [];

    constructor(data?: Partial<EmployeeControlResults>) {
        Object.assign(this, data);
    }
}
