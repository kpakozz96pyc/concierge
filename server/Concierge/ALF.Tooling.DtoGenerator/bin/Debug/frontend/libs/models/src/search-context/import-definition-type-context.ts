
import { ImportDefinitionType } from "../import/enums/import-definition-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionTypeContext {

    static $name = "ImportDefinitionTypeContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.ImportDefinitionTypeContext, ALF.Shared.Dto"

    type: ImportDefinitionType;

    constructor(data?: Partial<ImportDefinitionTypeContext>) {
        Object.assign(this, data);
    }
}
