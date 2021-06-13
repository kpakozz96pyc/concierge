
import { CompanyTagRule } from "@alf/models/rules/company-tag-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyTagRuleAll extends CompanyTagRule {

    static $name = "CompanyTagRuleAll";
    static typeNameHint = "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleAll, ALF.Shared.Dto"



    constructor(data?: Partial<CompanyTagRuleAll>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyTagRuleAll.typeNameHint;
    }
}
