import { Serializer } from "@alf/core/models";
import { DeletePostImportRule } from "@alf/models/post-import-rules/delete-post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeletePostImportRuleSerializer implements Serializer<DeletePostImportRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DeletePostImportRule
    deserialize(data: any): DeletePostImportRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DeletePostImportRule(copy);
    }

    serialize(entity: DeletePostImportRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DeletePostImportRule, _forceTypeHint?: boolean): any
    serialize(entity: DeletePostImportRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
