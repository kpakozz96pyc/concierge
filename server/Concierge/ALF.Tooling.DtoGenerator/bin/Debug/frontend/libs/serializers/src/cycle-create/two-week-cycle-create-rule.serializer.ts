import { Serializer } from "@alf/core/models";
import { TwoWeekCycleCreateRule } from "@alf/models/cycle-create/two-week-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TwoWeekCycleCreateRuleSerializer implements Serializer<TwoWeekCycleCreateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TwoWeekCycleCreateRule
    deserialize(data: any): TwoWeekCycleCreateRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TwoWeekCycleCreateRule(copy);
    }

    serialize(entity: TwoWeekCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TwoWeekCycleCreateRule, _forceTypeHint?: boolean): any
    serialize(entity: TwoWeekCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            paymentCycle: entity.paymentCycle,
            startDateOfFirstPeriodRule: entity.startDateOfFirstPeriodRule,
            payDateFormula: entity.payDateFormula
        };
    }
}
