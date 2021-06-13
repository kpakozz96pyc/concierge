
import { CompanyGroupRule } from "@alf/models/rules/company-group-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyGroupRuleTag extends CompanyGroupRule {

    static $name = "CompanyGroupRuleTag";
    static typeNameHint = "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleTag, ALF.Shared.Dto"

    companyTag?: string;

    constructor(data?: Partial<CompanyGroupRuleTag>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyGroupRuleTag.typeNameHint;
    }
}
