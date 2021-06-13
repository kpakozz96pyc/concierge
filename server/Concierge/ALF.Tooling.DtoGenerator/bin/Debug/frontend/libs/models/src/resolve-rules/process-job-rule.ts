
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobRule extends MetaJobParameterResolveRule {

    static $name = "ProcessJobRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ProcessJobRule, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessJobRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessJobRule.typeNameHint;
    }
}
