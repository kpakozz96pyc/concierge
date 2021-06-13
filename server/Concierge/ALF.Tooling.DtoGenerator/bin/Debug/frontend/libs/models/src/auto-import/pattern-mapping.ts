
import { PatternMappingType } from "./enums/pattern-mapping-type";
import { PostImportType } from "./enums/post-import-type";
import { AutoImportDefinitionId } from "./auto-import-definition";
import { PostImportRule } from "../post-import-rules/post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PatternMapping {

    static $name = "PatternMapping";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.PatternMapping, ALF.Shared.Dto"

    id: string;
    definition?: AutoImportDefinitionId;
    regex?: any;
    autoImportDefinitionId: string;
    importDefinitionId?: string;
    degreeOfImportance: number;
    type: PatternMappingType;
    value?: string;
    postImportType: PostImportType;
    postImportRule?: PostImportRule;

    constructor(data?: Partial<PatternMapping>) {
        Object.assign(this, data);
    }
}
