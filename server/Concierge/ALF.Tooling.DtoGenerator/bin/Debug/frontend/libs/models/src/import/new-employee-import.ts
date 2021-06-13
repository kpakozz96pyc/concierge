
import { ExternalFormatType } from "./enums/external-format-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewEmployeeImport {

    static $name = "NewEmployeeImport";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.NewEmployeeImport, ALF.Shared.Dto"

    externalFormatType: ExternalFormatType;
    importDefinitionId?: string;
    integrationPipelineId?: string;
    comment?: string;

    constructor(data?: Partial<NewEmployeeImport>) {
        Object.assign(this, data);
    }
}
