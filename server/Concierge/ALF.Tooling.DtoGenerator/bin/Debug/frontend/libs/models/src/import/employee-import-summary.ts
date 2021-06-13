
import { EmployeeImportDeviationRecord } from "../deviation/employee-import-deviation-record";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeImportSummaryId = string;

export class EmployeeImportSummary {

    static $name = "EmployeeImportSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.EmployeeImportSummary, ALF.Shared.Dto"

    employeeImportId: EmployeeImportSummaryId;
    newEmployeesCount: number;
    updatedEmployeesCount: number;
    newEmploymentsCount: number;
    updatedEmploymentsCount: number;
    deviations: EmployeeImportDeviationRecord[] = [];

    constructor(data?: Partial<EmployeeImportSummary>) {
        Object.assign(this, data);
    }
}
