
import { EmployeeCalculationStatus } from "./enums/employee-calculation-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeSalaryCalculationOverview {

    static $name = "EmployeeSalaryCalculationOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.SalaryCalculation.EmployeeSalaryCalculationOverview, ALF.Shared.Dto"

    calculationStatus: EmployeeCalculationStatus;
    waitingForJobId?: string;
    failureDescription?: string;
    lastCalculationStartedAt?: Date;
    lastCalculationCompletedAt?: Date;

    constructor(data?: Partial<EmployeeSalaryCalculationOverview>) {
        Object.assign(this, data);
    }
}
