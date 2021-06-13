import { Serializer } from "@alf/core/models";
import { OneWeekCycleCreateRule } from "@alf/models/cycle-create/one-week-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OneWeekCycleCreateRuleSerializer implements Serializer<OneWeekCycleCreateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OneWeekCycleCreateRule
    deserialize(data: any): OneWeekCycleCreateRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OneWeekCycleCreateRule(copy);
    }

    serialize(entity: OneWeekCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OneWeekCycleCreateRule, _forceTypeHint?: boolean): any
    serialize(entity: OneWeekCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined {
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
