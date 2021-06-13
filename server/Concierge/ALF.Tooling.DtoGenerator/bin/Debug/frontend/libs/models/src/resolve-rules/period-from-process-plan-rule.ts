
import { PeriodLookaroundRule } from "./enums/period-lookaround-rule";
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodFromProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "PeriodFromProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.PeriodFromProcessPlanRule, ALF.Shared.Dto"

    fixedPeriodId?: string;
    lookaroundRule?: PeriodLookaroundRule;
    latestOpenPeriodInCompany?: boolean;

    constructor(data?: Partial<PeriodFromProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = PeriodFromProcessPlanRule.typeNameHint;
    }
}
