import { Serializer } from "@alf/core/models";
import { ProcessPlanRule } from "@alf/models/resolve-rules/process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanRuleSerializer implements Serializer<ProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessPlanRule
    deserialize(data: any): ProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessPlanRule(copy);
    }

    serialize(entity: ProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: ProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
