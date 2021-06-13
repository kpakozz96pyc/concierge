import { Serializer } from "@alf/core/models";
import { DivisionFromProcessPlanRule } from "@alf/models/resolve-rules/division-from-process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DivisionFromProcessPlanRuleSerializer implements Serializer<DivisionFromProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DivisionFromProcessPlanRule
    deserialize(data: any): DivisionFromProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DivisionFromProcessPlanRule(copy);
    }

    serialize(entity: DivisionFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DivisionFromProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: DivisionFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
