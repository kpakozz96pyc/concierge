
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyFromProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "CompanyFromProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.CompanyFromProcessPlanRule, ALF.Shared.Dto"



    constructor(data?: Partial<CompanyFromProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyFromProcessPlanRule.typeNameHint;
    }
}
