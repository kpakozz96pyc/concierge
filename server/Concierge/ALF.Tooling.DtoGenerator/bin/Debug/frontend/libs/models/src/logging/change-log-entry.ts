
import { EmployeeId } from "../core/employee";
import { EmploymentId } from "../core/employment";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ChangeLogEntryId = string;

export class ChangeLogEntry {

    static $name = "ChangeLogEntry";
    static typeNameHint = "ALF.Shared.Dto.Models.Logging.ChangeLogEntry, ALF.Shared.Dto"

    id: ChangeLogEntryId;
    companyId?: string;
    employeeId: EmployeeId;
    employmentId: EmploymentId;
    tableNumber: number;
    fieldNumber: number;
    fieldDescription?: string;
    key1?: string;
    keyText1?: string;
    key2?: string;
    keyText2?: string;
    oldValue?: any;
    newValue?: any;
    changeDate?: Date;
    kode1?: string;
    kode2?: string;
    validFrom?: Date;
    changedBy?: string;
    periode?: number;
    origin?: string;
    changeDescription?: string;

    constructor(data?: Partial<ChangeLogEntry>) {
        Object.assign(this, data);
    }
}
