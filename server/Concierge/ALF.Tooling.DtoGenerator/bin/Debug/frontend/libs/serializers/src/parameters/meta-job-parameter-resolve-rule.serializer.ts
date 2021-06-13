import { BankTransferHeapNumberFromPeriodProcessResolveRuleSerializer } from "../resolve-rules/bank-transfer-heap-number-from-period-process-resolve-rule.serializer";
import { BooleanFromProcessPlanRuleSerializer } from "../resolve-rules/boolean-from-process-plan-rule.serializer";
import { CompanyFromMetadataIdRuleSerializer } from "../resolve-rules/company-from-metadata-id-rule.serializer";
import { CompanyFromProcessPlanRuleSerializer } from "../resolve-rules/company-from-process-plan-rule.serializer";
import { DateFromPeriodProcessPlanRuleSerializer } from "../resolve-rules/date-from-period-process-plan-rule.serializer";
import { DateFromTimeBasedProcessPlanRuleSerializer } from "../resolve-rules/date-from-time-based-process-plan-rule.serializer";
import { DivisionFromProcessPlanRuleSerializer } from "../resolve-rules/division-from-process-plan-rule.serializer";
import { MonthFromTimeBasedProcessPlanRuleSerializer } from "../resolve-rules/month-from-time-based-process-plan-rule.serializer";
import { PeriodFromProcessPlanRuleSerializer } from "../resolve-rules/period-from-process-plan-rule.serializer";
import { ProcessJobRuleSerializer } from "../resolve-rules/process-job-rule.serializer";
import { ProcessPlanRuleSerializer } from "../resolve-rules/process-plan-rule.serializer";
import { ReportCodeFromMetadataIdRuleSerializer } from "../resolve-rules/report-code-from-metadata-id-rule.serializer";
import { TodaysDateRuleSerializer } from "../resolve-rules/todays-date-rule.serializer";
import { BankTransferHeapNumberFromPeriodProcessResolveRule } from "@alf/models/resolve-rules/bank-transfer-heap-number-from-period-process-resolve-rule";
import { BooleanFromProcessPlanRule } from "@alf/models/resolve-rules/boolean-from-process-plan-rule";
import { CompanyFromMetadataIdRule } from "@alf/models/resolve-rules/company-from-metadata-id-rule";
import { CompanyFromProcessPlanRule } from "@alf/models/resolve-rules/company-from-process-plan-rule";
import { DateFromPeriodProcessPlanRule } from "@alf/models/resolve-rules/date-from-period-process-plan-rule";
import { DateFromTimeBasedProcessPlanRule } from "@alf/models/resolve-rules/date-from-time-based-process-plan-rule";
import { DivisionFromProcessPlanRule } from "@alf/models/resolve-rules/division-from-process-plan-rule";
import { MonthFromTimeBasedProcessPlanRule } from "@alf/models/resolve-rules/month-from-time-based-process-plan-rule";
import { PeriodFromProcessPlanRule } from "@alf/models/resolve-rules/period-from-process-plan-rule";
import { ProcessJobRule } from "@alf/models/resolve-rules/process-job-rule";
import { ProcessPlanRule } from "@alf/models/resolve-rules/process-plan-rule";
import { ReportCodeFromMetadataIdRule } from "@alf/models/resolve-rules/report-code-from-metadata-id-rule";
import { TodaysDateRule } from "@alf/models/resolve-rules/todays-date-rule";
import { Serializer } from "@alf/core/models";
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MetaJobParameterResolveRuleSerializer implements Serializer<MetaJobParameterResolveRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MetaJobParameterResolveRule
    deserialize(data: any): MetaJobParameterResolveRule | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.BankTransferHeapNumberFromPeriodProcessResolveRule, ALF.Shared.Dto")
            return new BankTransferHeapNumberFromPeriodProcessResolveRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.BooleanFromProcessPlanRule, ALF.Shared.Dto")
            return new BooleanFromProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.CompanyFromMetadataIdRule, ALF.Shared.Dto")
            return new CompanyFromMetadataIdRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.CompanyFromProcessPlanRule, ALF.Shared.Dto")
            return new CompanyFromProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DateFromPeriodProcessPlanRule, ALF.Shared.Dto")
            return new DateFromPeriodProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DateFromTimeBasedProcessPlanRule, ALF.Shared.Dto")
            return new DateFromTimeBasedProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DivisionFromProcessPlanRule, ALF.Shared.Dto")
            return new DivisionFromProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.MonthFromTimeBasedProcessPlanRule, ALF.Shared.Dto")
            return new MonthFromTimeBasedProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.PeriodFromProcessPlanRule, ALF.Shared.Dto")
            return new PeriodFromProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ProcessJobRule, ALF.Shared.Dto")
            return new ProcessJobRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ProcessPlanRule, ALF.Shared.Dto")
            return new ProcessPlanRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ReportCodeFromMetadataIdRule, ALF.Shared.Dto")
            return new ReportCodeFromMetadataIdRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.TodaysDateRule, ALF.Shared.Dto")
            return new TodaysDateRuleSerializer().deserialize(data);

        throw new Error("Unable to deserialize MetaJobParameterResolveRule, cannot infer type from " + data.$type);
    }

    serialize(entity: MetaJobParameterResolveRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MetaJobParameterResolveRule, _forceTypeHint?: boolean): any
    serialize(entity: MetaJobParameterResolveRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.BankTransferHeapNumberFromPeriodProcessResolveRule, ALF.Shared.Dto")
            return new BankTransferHeapNumberFromPeriodProcessResolveRuleSerializer().serialize(entity as BankTransferHeapNumberFromPeriodProcessResolveRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.BooleanFromProcessPlanRule, ALF.Shared.Dto")
            return new BooleanFromProcessPlanRuleSerializer().serialize(entity as BooleanFromProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.CompanyFromMetadataIdRule, ALF.Shared.Dto")
            return new CompanyFromMetadataIdRuleSerializer().serialize(entity as CompanyFromMetadataIdRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.CompanyFromProcessPlanRule, ALF.Shared.Dto")
            return new CompanyFromProcessPlanRuleSerializer().serialize(entity as CompanyFromProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DateFromPeriodProcessPlanRule, ALF.Shared.Dto")
            return new DateFromPeriodProcessPlanRuleSerializer().serialize(entity as DateFromPeriodProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DateFromTimeBasedProcessPlanRule, ALF.Shared.Dto")
            return new DateFromTimeBasedProcessPlanRuleSerializer().serialize(entity as DateFromTimeBasedProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.DivisionFromProcessPlanRule, ALF.Shared.Dto")
            return new DivisionFromProcessPlanRuleSerializer().serialize(entity as DivisionFromProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.MonthFromTimeBasedProcessPlanRule, ALF.Shared.Dto")
            return new MonthFromTimeBasedProcessPlanRuleSerializer().serialize(entity as MonthFromTimeBasedProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.PeriodFromProcessPlanRule, ALF.Shared.Dto")
            return new PeriodFromProcessPlanRuleSerializer().serialize(entity as PeriodFromProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ProcessJobRule, ALF.Shared.Dto")
            return new ProcessJobRuleSerializer().serialize(entity as ProcessJobRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ProcessPlanRule, ALF.Shared.Dto")
            return new ProcessPlanRuleSerializer().serialize(entity as ProcessPlanRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ReportCodeFromMetadataIdRule, ALF.Shared.Dto")
            return new ReportCodeFromMetadataIdRuleSerializer().serialize(entity as ReportCodeFromMetadataIdRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.TodaysDateRule, ALF.Shared.Dto")
            return new TodaysDateRuleSerializer().serialize(entity as TodaysDateRule, _forceTypeHint);

        throw new Error("Unable to serialize MetaJobParameterResolveRule, cannot infer type from " + entity.$type);
    }
}
