
import { ImportDefinitionColumn } from "@alf/models/import/import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IntegrationImportDefinitionColumn extends ImportDefinitionColumn {

    static $name = "IntegrationImportDefinitionColumn";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.IntegrationImportDefinitionColumn, ALF.Shared.Dto"

    isGlobal: boolean;

    constructor(data?: Partial<IntegrationImportDefinitionColumn>) {
        super(data);
        Object.assign(this, data);
        this.$type = IntegrationImportDefinitionColumn.typeNameHint;
    }
}
