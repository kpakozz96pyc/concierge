import { Serializer } from "@alf/core/models";
import { MonthlyCycleCreateRule } from "@alf/models/cycle-create/monthly-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MonthlyCycleCreateRuleSerializer implements Serializer<MonthlyCycleCreateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MonthlyCycleCreateRule
    deserialize(data: any): MonthlyCycleCreateRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new MonthlyCycleCreateRule(copy);
    }

    serialize(entity: MonthlyCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MonthlyCycleCreateRule, _forceTypeHint?: boolean): any
    serialize(entity: MonthlyCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            paymentCycle: entity.paymentCycle,
            startDayOfPeriod: entity.startDayOfPeriod,
            payDateFormula: entity.payDateFormula
        };
    }
}
