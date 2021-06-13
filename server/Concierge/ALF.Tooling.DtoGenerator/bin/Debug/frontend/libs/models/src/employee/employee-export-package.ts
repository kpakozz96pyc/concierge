
import { EmployeeExportOrderId } from "./employee-export-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExportPackage {

    static $name = "EmployeeExportPackage";
    static typeNameHint = "ALF.Shared.Dto.Models.Export.Employee.EmployeeExportPackage, ALF.Shared.Dto"

    id: string;
    exportOrderId: string;
    companyId?: string;
    employeeNumber?: number;
    employmentSequenceNumber?: number;
    positionCode?: string;
    createdTimestamp: Date;
    deliveredTimestamp?: Date;
    exportOrder?: EmployeeExportOrderId;
    fileData?: any;

    constructor(data?: Partial<EmployeeExportPackage>) {
        Object.assign(this, data);
    }
}
