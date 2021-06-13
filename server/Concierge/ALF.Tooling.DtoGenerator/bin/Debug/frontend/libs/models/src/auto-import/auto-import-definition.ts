
import { AutoImportDefinitionType } from "./enums/auto-import-definition-type";
import { AutoImportSourceId } from "./auto-import-source";
import { GlobPattern } from "./glob-pattern";
import { PatternMapping } from "./pattern-mapping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AutoImportDefinitionId = string;

export class AutoImportDefinition {

    static $name = "AutoImportDefinition";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.AutoImportDefinition, ALF.Shared.Dto"

    id: AutoImportDefinitionId;
    companyId?: string;
    type: AutoImportDefinitionType;
    autoImportSource?: AutoImportSourceId;
    autoImportSourceId: string;
    directImport: boolean;
    approvalMode?: string;
    scheduledJobId?: string;
    failWhenEmpty: boolean;
    globPatterns: GlobPattern[] = [];
    patternMappings: PatternMapping[] = [];

    constructor(data?: Partial<AutoImportDefinition>) {
        Object.assign(this, data);
    }
}
