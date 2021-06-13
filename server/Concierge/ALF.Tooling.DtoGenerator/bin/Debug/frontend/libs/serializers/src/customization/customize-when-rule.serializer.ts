import { OnEveryXthPeriodInYearRuleSerializer } from "./on-every-xth-period-in-year-rule.serializer";
import { OnFirstPeriodInEveryMonthSerializer } from "./on-first-period-in-every-month.serializer";
import { OnFirstPeriodInMonthsSerializer } from "./on-first-period-in-months.serializer";
import { OnSpecificMonthsRuleSerializer } from "./on-specific-months-rule.serializer";
import { OnSpecificPeriodNumberInYearRuleSerializer } from "./on-specific-period-number-in-year-rule.serializer";
import { OnEveryXthPeriodInYearRule } from "@alf/models/customization/on-every-xth-period-in-year-rule";
import { OnFirstPeriodInEveryMonth } from "@alf/models/customization/on-first-period-in-every-month";
import { OnFirstPeriodInMonths } from "@alf/models/customization/on-first-period-in-months";
import { OnSpecificMonthsRule } from "@alf/models/customization/on-specific-months-rule";
import { OnSpecificPeriodNumberInYearRule } from "@alf/models/customization/on-specific-period-number-in-year-rule";
import { Serializer } from "@alf/core/models";
import { CustomizeWhenRule } from "@alf/models/customization/customize-when-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CustomizeWhenRuleSerializer implements Serializer<CustomizeWhenRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CustomizeWhenRule
    deserialize(data: any): CustomizeWhenRule | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnEveryXthPeriodInYearRule, ALF.Shared.Dto")
            return new OnEveryXthPeriodInYearRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnFirstPeriodInEveryMonth, ALF.Shared.Dto")
            return new OnFirstPeriodInEveryMonthSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnFirstPeriodInMonths, ALF.Shared.Dto")
            return new OnFirstPeriodInMonthsSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnSpecificMonthsRule, ALF.Shared.Dto")
            return new OnSpecificMonthsRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnSpecificPeriodNumberInYearRule, ALF.Shared.Dto")
            return new OnSpecificPeriodNumberInYearRuleSerializer().deserialize(data);

        throw new Error("Unable to deserialize CustomizeWhenRule, cannot infer type from " + data.$type);
    }

    serialize(entity: CustomizeWhenRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CustomizeWhenRule, _forceTypeHint?: boolean): any
    serialize(entity: CustomizeWhenRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnEveryXthPeriodInYearRule, ALF.Shared.Dto")
            return new OnEveryXthPeriodInYearRuleSerializer().serialize(entity as OnEveryXthPeriodInYearRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnFirstPeriodInEveryMonth, ALF.Shared.Dto")
            return new OnFirstPeriodInEveryMonthSerializer().serialize(entity as OnFirstPeriodInEveryMonth, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnFirstPeriodInMonths, ALF.Shared.Dto")
            return new OnFirstPeriodInMonthsSerializer().serialize(entity as OnFirstPeriodInMonths, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnSpecificMonthsRule, ALF.Shared.Dto")
            return new OnSpecificMonthsRuleSerializer().serialize(entity as OnSpecificMonthsRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnSpecificPeriodNumberInYearRule, ALF.Shared.Dto")
            return new OnSpecificPeriodNumberInYearRuleSerializer().serialize(entity as OnSpecificPeriodNumberInYearRule, _forceTypeHint);

        throw new Error("Unable to serialize CustomizeWhenRule, cannot infer type from " + entity.$type);
    }
}
