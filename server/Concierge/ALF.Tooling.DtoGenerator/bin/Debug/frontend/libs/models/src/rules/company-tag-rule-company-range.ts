
import { CompanyTagRule } from "@alf/models/rules/company-tag-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyTagRuleCompanyRange extends CompanyTagRule {

    static $name = "CompanyTagRuleCompanyRange";
    static typeNameHint = "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleCompanyRange, ALF.Shared.Dto"

    startingWithCompanyId?: string;
    endingWithCompanyId?: string;

    constructor(data?: Partial<CompanyTagRuleCompanyRange>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyTagRuleCompanyRange.typeNameHint;
    }
}
