
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DivisionFromProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "DivisionFromProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DivisionFromProcessPlanRule, ALF.Shared.Dto"



    constructor(data?: Partial<DivisionFromProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = DivisionFromProcessPlanRule.typeNameHint;
    }
}
