
import { ProcessPlanMonthLookupRule } from "./enums/process-plan-month-lookup-rule";
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MonthFromTimeBasedProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "MonthFromTimeBasedProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.MonthFromTimeBasedProcessPlanRule, ALF.Shared.Dto"

    processPlanMonthLookupRule?: ProcessPlanMonthLookupRule;

    constructor(data?: Partial<MonthFromTimeBasedProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = MonthFromTimeBasedProcessPlanRule.typeNameHint;
    }
}
