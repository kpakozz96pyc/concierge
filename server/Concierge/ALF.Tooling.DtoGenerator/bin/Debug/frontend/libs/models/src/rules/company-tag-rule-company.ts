
import { CompanyTagRule } from "@alf/models/rules/company-tag-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyTagRuleCompany extends CompanyTagRule {

    static $name = "CompanyTagRuleCompany";
    static typeNameHint = "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleCompany, ALF.Shared.Dto"

    companyId?: string;

    constructor(data?: Partial<CompanyTagRuleCompany>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyTagRuleCompany.typeNameHint;
    }
}
