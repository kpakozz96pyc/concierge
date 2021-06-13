
import { CompanyGroupRule } from "@alf/models/rules/company-group-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyGroupRuleActive extends CompanyGroupRule {

    static $name = "CompanyGroupRuleActive";
    static typeNameHint = "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleActive, ALF.Shared.Dto"

    fuzzynessInDays: number;

    constructor(data?: Partial<CompanyGroupRuleActive>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyGroupRuleActive.typeNameHint;
    }
}
