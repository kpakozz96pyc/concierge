
import { ImportDefinitionColumn } from "@alf/models/import/import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CommaSeparatedImportDefinitionColumn extends ImportDefinitionColumn {

    static $name = "CommaSeparatedImportDefinitionColumn";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.CommaSeparatedImportDefinitionColumn, ALF.Shared.Dto"

    explicitlyOverriddenColumnNumber?: number;
    columnNumber: number;

    constructor(data?: Partial<CommaSeparatedImportDefinitionColumn>) {
        super(data);
        Object.assign(this, data);
        this.$type = CommaSeparatedImportDefinitionColumn.typeNameHint;
    }
}
