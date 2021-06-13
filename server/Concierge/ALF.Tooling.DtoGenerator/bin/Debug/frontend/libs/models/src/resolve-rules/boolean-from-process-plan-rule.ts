
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BooleanFromProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "BooleanFromProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.BooleanFromProcessPlanRule, ALF.Shared.Dto"

    value?: boolean;

    constructor(data?: Partial<BooleanFromProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = BooleanFromProcessPlanRule.typeNameHint;
    }
}
