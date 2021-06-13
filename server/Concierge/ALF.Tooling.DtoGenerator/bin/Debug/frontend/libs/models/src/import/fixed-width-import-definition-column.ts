
import { ImportDefinitionColumn } from "@alf/models/import/import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FixedWidthImportDefinitionColumn extends ImportDefinitionColumn {

    static $name = "FixedWidthImportDefinitionColumn";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.FixedWidthImportDefinitionColumn, ALF.Shared.Dto"

    fromCharacter: number;
    toCharacter: number;

    constructor(data?: Partial<FixedWidthImportDefinitionColumn>) {
        super(data);
        Object.assign(this, data);
        this.$type = FixedWidthImportDefinitionColumn.typeNameHint;
    }
}
