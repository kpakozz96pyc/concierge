import { DeletePostImportRuleSerializer } from "./delete-post-import-rule.serializer";
import { DoNothingPostImportRuleSerializer } from "./do-nothing-post-import-rule.serializer";
import { MovePostImportRuleSerializer } from "./move-post-import-rule.serializer";
import { DeletePostImportRule } from "@alf/models/post-import-rules/delete-post-import-rule";
import { DoNothingPostImportRule } from "@alf/models/post-import-rules/do-nothing-post-import-rule";
import { MovePostImportRule } from "@alf/models/post-import-rules/move-post-import-rule";
import { Serializer } from "@alf/core/models";
import { PostImportRule } from "@alf/models/post-import-rules/post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PostImportRuleSerializer implements Serializer<PostImportRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PostImportRule
    deserialize(data: any): PostImportRule | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.AutoImport.PostImportRules.DeletePostImportRule, ALF.Shared.Dto")
            return new DeletePostImportRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.AutoImport.PostImportRules.DoNothingPostImportRule, ALF.Shared.Dto")
            return new DoNothingPostImportRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.AutoImport.PostImportRules.MovePostImportRule, ALF.Shared.Dto")
            return new MovePostImportRuleSerializer().deserialize(data);

        throw new Error("Unable to deserialize PostImportRule, cannot infer type from " + data.$type);
    }

    serialize(entity: PostImportRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PostImportRule, _forceTypeHint?: boolean): any
    serialize(entity: PostImportRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.AutoImport.PostImportRules.DeletePostImportRule, ALF.Shared.Dto")
            return new DeletePostImportRuleSerializer().serialize(entity as DeletePostImportRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.AutoImport.PostImportRules.DoNothingPostImportRule, ALF.Shared.Dto")
            return new DoNothingPostImportRuleSerializer().serialize(entity as DoNothingPostImportRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.AutoImport.PostImportRules.MovePostImportRule, ALF.Shared.Dto")
            return new MovePostImportRuleSerializer().serialize(entity as MovePostImportRule, _forceTypeHint);

        throw new Error("Unable to serialize PostImportRule, cannot infer type from " + entity.$type);
    }
}
