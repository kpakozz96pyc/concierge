import { Serializer } from "@alf/core/models";
import { FourWeekCycleCreateRule } from "@alf/models/cycle-create/four-week-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FourWeekCycleCreateRuleSerializer implements Serializer<FourWeekCycleCreateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FourWeekCycleCreateRule
    deserialize(data: any): FourWeekCycleCreateRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FourWeekCycleCreateRule(copy);
    }

    serialize(entity: FourWeekCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FourWeekCycleCreateRule, _forceTypeHint?: boolean): any
    serialize(entity: FourWeekCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined {
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
