
import { ExternalFormatType } from "../import/enums/external-format-type";
import { EmployeeExportDataType } from "./enums/employee-export-data-type";
import { EmployeeExportType } from "./enums/employee-export-type";
import { ImportDefinitionType } from "../import/enums/import-definition-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeExportDefinitionId = string;

export class EmployeeExportDefinition {

    static $name = "EmployeeExportDefinition";
    static typeNameHint = "ALF.Shared.Dto.Models.Export.Employee.EmployeeExportDefinition, ALF.Shared.Dto"

    id: EmployeeExportDefinitionId;
    description?: string;
    externalFormatType: ExternalFormatType;
    dataType: EmployeeExportDataType;
    exportType: EmployeeExportType;
    importExportDefinitionCode?: string;
    importExportType: ImportDefinitionType;

    constructor(data?: Partial<EmployeeExportDefinition>) {
        Object.assign(this, data);
    }
}
