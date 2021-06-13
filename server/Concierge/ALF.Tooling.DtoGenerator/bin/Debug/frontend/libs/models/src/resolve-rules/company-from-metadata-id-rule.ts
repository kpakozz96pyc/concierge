
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyFromMetadataIdRule extends MetaJobParameterResolveRule {

    static $name = "CompanyFromMetadataIdRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.CompanyFromMetadataIdRule, ALF.Shared.Dto"



    constructor(data?: Partial<CompanyFromMetadataIdRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyFromMetadataIdRule.typeNameHint;
    }
}
