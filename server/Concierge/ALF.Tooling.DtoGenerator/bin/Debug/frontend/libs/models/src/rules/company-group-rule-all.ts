
import { CompanyGroupRule } from "@alf/models/rules/company-group-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyGroupRuleAll extends CompanyGroupRule {

    static $name = "CompanyGroupRuleAll";
    static typeNameHint = "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleAll, ALF.Shared.Dto"



    constructor(data?: Partial<CompanyGroupRuleAll>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyGroupRuleAll.typeNameHint;
    }
}
