
import { DateFromPayrollPeriod } from "./enums/date-from-payroll-period";
import { DateFromJobProcessDate } from "../parameters/enums/date-from-job-process-date";
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DateFromPeriodProcessPlanRule extends MetaJobParameterResolveRule {

    static $name = "DateFromPeriodProcessPlanRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DateFromPeriodProcessPlanRule, ALF.Shared.Dto"

    periodDateLookup?: DateFromPayrollPeriod;
    fromJobProcessDate?: DateFromJobProcessDate;

    constructor(data?: Partial<DateFromPeriodProcessPlanRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = DateFromPeriodProcessPlanRule.typeNameHint;
    }
}
