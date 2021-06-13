
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "ProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ProcessPlanRule, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessPlanRule.typeNameHint;
    }
}
