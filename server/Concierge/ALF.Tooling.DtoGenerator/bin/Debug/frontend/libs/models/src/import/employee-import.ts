
import { EmployeeImportStatus } from "./enums/employee-import-status";
import { ExternalFormatType } from "./enums/external-format-type";
import { ImportSourceId } from "./import-source";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeImportId = string;

export class EmployeeImport {

    static $name = "EmployeeImport";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.EmployeeImport, ALF.Shared.Dto"

    id: EmployeeImportId;
    companyId?: string;
    externalFormatType?: ExternalFormatType;
    source: ImportSourceId;
    integrationPipelineId?: any;
    messageCallTimestamp?: Date;
    messagePayloadTimestamp?: Date;
    messageCorrelationId?: string;
    messageOriginCorrelationId?: string;
    messageConnectorCorrelationId?: string;
    receiveTimestamp?: Date;
    receiveCorrelationId?: string;
    importDefinitionId?: string;
    status: EmployeeImportStatus;
    waitingForJobId?: string;
    attempts: number;
    changed: Date;

    constructor(data?: Partial<EmployeeImport>) {
        Object.assign(this, data);
    }
}
