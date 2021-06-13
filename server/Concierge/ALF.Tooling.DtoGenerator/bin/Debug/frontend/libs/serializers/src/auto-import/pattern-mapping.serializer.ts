import { PatternMappingType } from "@alf/models/auto-import/enums/pattern-mapping-type";
import { PostImportType } from "@alf/models/auto-import/enums/post-import-type";
import { PostImportRuleSerializer } from "../post-import-rules/post-import-rule.serializer";
import { Serializer } from "@alf/core/models";
import { PatternMapping } from "@alf/models/auto-import/pattern-mapping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PatternMappingSerializer implements Serializer<PatternMapping> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PatternMapping
    deserialize(data: any): PatternMapping | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = PatternMappingType[copy.type];

        copy.postImportType = PostImportType[copy.postImportType];

        copy.postImportRule = new PostImportRuleSerializer().deserialize(copy.postImportRule);

        return new PatternMapping(copy);
    }

    serialize(entity: PatternMapping | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PatternMapping, _forceTypeHint?: boolean): any
    serialize(entity: PatternMapping | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PatternMapping.typeNameHint : undefined,
            id: entity.id,
            definition: entity.definition,
            regex: entity.regex,
            autoImportDefinitionId: entity.autoImportDefinitionId,
            importDefinitionId: entity.importDefinitionId,
            degreeOfImportance: entity.degreeOfImportance,
            type: PatternMappingType[entity.type],
            value: entity.value,
            postImportType: PostImportType[entity.postImportType],
            postImportRule: new PostImportRuleSerializer().serialize(entity.postImportRule, _forceTypeHint)
        };
    }
}
