import { Serializer } from "@alf/core/models";
import { MovePostImportRule } from "@alf/models/post-import-rules/move-post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MovePostImportRuleSerializer implements Serializer<MovePostImportRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MovePostImportRule
    deserialize(data: any): MovePostImportRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new MovePostImportRule(copy);
    }

    serialize(entity: MovePostImportRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MovePostImportRule, _forceTypeHint?: boolean): any
    serialize(entity: MovePostImportRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            directoryToMoveTo: entity.directoryToMoveTo,
            shouldAppendCurrentDate: entity.shouldAppendCurrentDate
        };
    }
}
