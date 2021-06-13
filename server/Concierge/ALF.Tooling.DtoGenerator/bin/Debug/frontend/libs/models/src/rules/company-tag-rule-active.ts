
import { CompanyTagRule } from "@alf/models/rules/company-tag-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyTagRuleActive extends CompanyTagRule {

    static $name = "CompanyTagRuleActive";
    static typeNameHint = "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleActive, ALF.Shared.Dto"

    fuzzynessInDays: number;

    constructor(data?: Partial<CompanyTagRuleActive>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyTagRuleActive.typeNameHint;
    }
}
