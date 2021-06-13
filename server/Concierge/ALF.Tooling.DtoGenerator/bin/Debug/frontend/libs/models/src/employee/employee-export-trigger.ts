
import { EmployeeExportEvent } from "./enums/employee-export-event";
import { EmployeeExportContextType } from "./enums/employee-export-context-type";
import { EmployeeExportPackageSplit } from "./enums/employee-export-package-split";
import { EmployeeExportDataType } from "./enums/employee-export-data-type";
import { EmployeeExportType } from "./enums/employee-export-type";
import { IntegrationPipelineId } from "../integration/integration-pipeline";
import { AutoImportSourceId } from "../auto-import/auto-import-source";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeExportTriggerId = string;

export class EmployeeExportTrigger {

    static $name = "EmployeeExportTrigger";
    static typeNameHint = "ALF.Shared.Dto.Models.Export.Employee.EmployeeExportTrigger, ALF.Shared.Dto"

    id: EmployeeExportTriggerId;
    integrationPipelineId: IntegrationPipelineId;
    exportDestinationId: AutoImportSourceId;
    description?: string;
    event: EmployeeExportEvent;
    contextType: EmployeeExportContextType;
    packageSplit: EmployeeExportPackageSplit;
    minimumPullIntervalSeconds: number;
    isActive: boolean;
    filterQuery?: string;
    dataType: EmployeeExportDataType;
    exportType: EmployeeExportType;

    constructor(data?: Partial<EmployeeExportTrigger>) {
        Object.assign(this, data);
    }
}
