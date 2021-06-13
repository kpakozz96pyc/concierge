
import { CompanyGroupRule } from "@alf/models/rules/company-group-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyGroupRuleCompany extends CompanyGroupRule {

    static $name = "CompanyGroupRuleCompany";
    static typeNameHint = "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleCompany, ALF.Shared.Dto"

    companyId?: string;

    constructor(data?: Partial<CompanyGroupRuleCompany>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyGroupRuleCompany.typeNameHint;
    }
}
