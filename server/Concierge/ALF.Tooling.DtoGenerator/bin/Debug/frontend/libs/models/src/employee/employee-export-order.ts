
import { EmployeeExportContextType } from "./enums/employee-export-context-type";
import { EmployeeExportOrderStatus } from "./enums/employee-export-order-status";
import { EmployeeExportTriggerId } from "./employee-export-trigger";
import { EmployeeExportEmployeeData } from "./employee-export-employee-data";
import { EmployeeExportPackage } from "./employee-export-package";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeExportOrderId = string;

export class EmployeeExportOrder {

    static $name = "EmployeeExportOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Export.Employee.EmployeeExportOrder, ALF.Shared.Dto"

    id: EmployeeExportOrderId;
    jobOrderId?: string;
    contextType: EmployeeExportContextType;
    companyId?: string;
    employeeNumber?: number;
    employmentSequenceNumber?: number;
    positionCode?: string;
    status: EmployeeExportOrderStatus;
    createdByUserId?: string;
    createdByUsername?: string;
    createdTimestamp: Date;
    scheduledForTimestamp: Date;
    preparedTimestamp?: Date;
    packagedTimestamp?: Date;
    deliveredTimestamp?: Date;
    exportTrigger?: EmployeeExportTriggerId;
    exportEmployeeData: EmployeeExportEmployeeData[] = [];
    exportEmploymentData: any[] = [];
    exportEmployeePackage: EmployeeExportPackage[] = [];

    constructor(data?: Partial<EmployeeExportOrder>) {
        Object.assign(this, data);
    }
}
