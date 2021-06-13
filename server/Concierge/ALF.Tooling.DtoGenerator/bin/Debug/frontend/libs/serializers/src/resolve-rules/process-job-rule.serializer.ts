import { Serializer } from "@alf/core/models";
import { ProcessJobRule } from "@alf/models/resolve-rules/process-job-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobRuleSerializer implements Serializer<ProcessJobRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessJobRule
    deserialize(data: any): ProcessJobRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessJobRule(copy);
    }

    serialize(entity: ProcessJobRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessJobRule, _forceTypeHint?: boolean): any
    serialize(entity: ProcessJobRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
