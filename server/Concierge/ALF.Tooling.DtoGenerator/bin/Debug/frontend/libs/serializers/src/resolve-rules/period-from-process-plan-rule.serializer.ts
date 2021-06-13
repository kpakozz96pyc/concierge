import { Serializer } from "@alf/core/models";
import { PeriodFromProcessPlanRule } from "@alf/models/resolve-rules/period-from-process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodFromProcessPlanRuleSerializer implements Serializer<PeriodFromProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodFromProcessPlanRule
    deserialize(data: any): PeriodFromProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PeriodFromProcessPlanRule(copy);
    }

    serialize(entity: PeriodFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodFromProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: PeriodFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            fixedPeriodId: entity.fixedPeriodId,
            lookaroundRule: entity.lookaroundRule,
            latestOpenPeriodInCompany: entity.latestOpenPeriodInCompany
        };
    }
}
