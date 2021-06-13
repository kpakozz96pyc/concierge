

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GlobPattern {

    static $name = "GlobPattern";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.GlobPattern, ALF.Shared.Dto"

    id: string;
    autoImportDefinitionId: string;
    pattern?: string;

    constructor(data?: Partial<GlobPattern>) {
        Object.assign(this, data);
    }
}
