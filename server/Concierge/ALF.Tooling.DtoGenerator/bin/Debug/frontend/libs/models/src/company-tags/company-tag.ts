
import { CompanyTagRule } from "../rules/company-tag-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type CompanyTagId = string;

export class CompanyTag {

    static $name = "CompanyTag";
    static typeNameHint = "ALF.Shared.Dto.Models.Tagging.CompanyTags.CompanyTag, ALF.Shared.Dto"

    id: CompanyTagId;
    description?: string;
    isSystemShipped: boolean;
    rules: CompanyTagRule[] = [];

    constructor(data?: Partial<CompanyTag>) {
        Object.assign(this, data);
    }
}
