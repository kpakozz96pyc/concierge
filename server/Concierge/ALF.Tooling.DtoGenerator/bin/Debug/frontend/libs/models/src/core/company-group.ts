
import { CompanyGroupRule } from "../rules/company-group-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type CompanyGroupId = string;

export class CompanyGroup {

    static $name = "CompanyGroup";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.CompanyGroup, ALF.Shared.Dto"

    id: CompanyGroupId;
    code: string;
    name?: string;
    rules: CompanyGroupRule[] = [];

    constructor(data?: Partial<CompanyGroup>) {
        Object.assign(this, data);
    }
}
