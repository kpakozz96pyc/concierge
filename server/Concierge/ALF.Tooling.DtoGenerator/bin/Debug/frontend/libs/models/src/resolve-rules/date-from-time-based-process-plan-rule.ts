
import { DateFromTimeBasedProcessPlanDirectly } from "./enums/date-from-time-based-process-plan-directly";
import { DateFromJobProcessDate } from "../parameters/enums/date-from-job-process-date";
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DateFromTimeBasedProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "DateFromTimeBasedProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DateFromTimeBasedProcessPlanRule, ALF.Shared.Dto"

    directDateLookup?: DateFromTimeBasedProcessPlanDirectly;
    fromJobProcessDate?: DateFromJobProcessDate;

    constructor(data?: Partial<DateFromTimeBasedProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = DateFromTimeBasedProcessPlanRule.typeNameHint;
    }
}
