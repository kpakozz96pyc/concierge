import { Serializer } from "@alf/core/models";
import { DoNothingPostImportRule } from "@alf/models/post-import-rules/do-nothing-post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DoNothingPostImportRuleSerializer implements Serializer<DoNothingPostImportRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DoNothingPostImportRule
    deserialize(data: any): DoNothingPostImportRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DoNothingPostImportRule(copy);
    }

    serialize(entity: DoNothingPostImportRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DoNothingPostImportRule, _forceTypeHint?: boolean): any
    serialize(entity: DoNothingPostImportRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
