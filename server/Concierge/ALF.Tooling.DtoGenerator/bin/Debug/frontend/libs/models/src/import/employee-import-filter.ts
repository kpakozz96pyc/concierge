
import { FilterDateType } from "../core/enums/filter-date-type";
import { EmployeeImportStatusFilter } from "./enums/employee-import-status-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportFilter {

    static $name = "EmployeeImportFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.EmployeeImportFilter, ALF.Shared.Dto"

    statuses: EmployeeImportStatusFilter[] = [];
    dateType: FilterDateType;
    fromDate?: Date;
    toDate?: Date;
    pipelines: string[] = [];

    constructor(data?: Partial<EmployeeImportFilter>) {
        Object.assign(this, data);
    }
}
