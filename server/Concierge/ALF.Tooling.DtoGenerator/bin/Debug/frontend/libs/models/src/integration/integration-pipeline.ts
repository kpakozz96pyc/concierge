
import { ExternalFormatType } from "../import/enums/external-format-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type IntegrationPipelineId = string;

export class IntegrationPipeline {

    static $name = "IntegrationPipeline";
    static typeNameHint = "ALF.Shared.Dto.Models.Integration.IntegrationPipeline, ALF.Shared.Dto"

    id: IntegrationPipelineId;
    integrationPipelineCode?: string;
    description?: string;
    directionIn: boolean;
    directionOut: boolean;
    externalSystemId?: string;
    fileFormat: ExternalFormatType;
    importDefinitionId?: string;
    replacementIdForCompany?: string;
    importPipelineId?: string;
    exportPipelineId?: string;
    targetTenantId?: string;

    constructor(data?: Partial<IntegrationPipeline>) {
        Object.assign(this, data);
    }
}
