
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TodaysDateRule extends MetaJobParameterResolveRule {

    static $name = "TodaysDateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.TodaysDateRule, ALF.Shared.Dto"



    constructor(data?: Partial<TodaysDateRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = TodaysDateRule.typeNameHint;
    }
}
