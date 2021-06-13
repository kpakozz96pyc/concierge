
import { EmployeeId } from "../core/employee";
import { EmployeeLevelError } from "./employee-level-error";
import { EmploymentLevelError } from "./employment-level-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeWithErrors {

    static $name = "EmployeeWithErrors";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.Errors.EmployeeWithErrors, ALF.Shared.Dto"

    id?: string;
    employeeId: EmployeeId;
    employeeLevelErrors: EmployeeLevelError[] = [];
    employmentLevelErrors: EmploymentLevelError[] = [];

    constructor(data?: Partial<EmployeeWithErrors>) {
        Object.assign(this, data);
    }
}
