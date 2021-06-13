
import { EmployeeExportOrderId } from "./employee-export-order";
import { EmployeeId } from "../core/employee";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExportEmployeeData {

    static $name = "EmployeeExportEmployeeData";
    static typeNameHint = "ALF.Shared.Dto.Models.Export.Employee.EmployeeExportEmployeeData, ALF.Shared.Dto"

    companyId?: string;
    employeeNumber: number;
    includedInExport: boolean;
    currentRecordTimestamp: Date;
    currentValuesTimestamp: Date;
    exportOrder?: EmployeeExportOrderId;
    employee?: EmployeeId;

    constructor(data?: Partial<EmployeeExportEmployeeData>) {
        Object.assign(this, data);
    }
}
