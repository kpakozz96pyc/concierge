import { Serializer } from "@alf/core/models";
import { BooleanFromProcessPlanRule } from "@alf/models/resolve-rules/boolean-from-process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BooleanFromProcessPlanRuleSerializer implements Serializer<BooleanFromProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BooleanFromProcessPlanRule
    deserialize(data: any): BooleanFromProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BooleanFromProcessPlanRule(copy);
    }

    serialize(entity: BooleanFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BooleanFromProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: BooleanFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            value: entity.value
        };
    }
}
