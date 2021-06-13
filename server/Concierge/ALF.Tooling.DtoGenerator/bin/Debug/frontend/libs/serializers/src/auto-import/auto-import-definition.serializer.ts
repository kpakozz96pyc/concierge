import { GlobPatternSerializer } from "./glob-pattern.serializer";
import { PatternMappingSerializer } from "./pattern-mapping.serializer";
import { Serializer } from "@alf/core/models";
import { AutoImportDefinition } from "@alf/models/auto-import/auto-import-definition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AutoImportDefinitionSerializer implements Serializer<AutoImportDefinition> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AutoImportDefinition
    deserialize(data: any): AutoImportDefinition | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.globPatterns = (copy.globPatterns || []).map(new GlobPatternSerializer().deserialize);

        copy.patternMappings = (copy.patternMappings || []).map(new PatternMappingSerializer().deserialize);

        return new AutoImportDefinition(copy);
    }

    serialize(entity: AutoImportDefinition | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AutoImportDefinition, _forceTypeHint?: boolean): any
    serialize(entity: AutoImportDefinition | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AutoImportDefinition.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            type: entity.type,
            autoImportSource: entity.autoImportSource,
            autoImportSourceId: entity.autoImportSourceId,
            directImport: entity.directImport,
            approvalMode: entity.approvalMode,
            scheduledJobId: entity.scheduledJobId,
            failWhenEmpty: entity.failWhenEmpty,
            globPatterns: entity.globPatterns
                ? entity.globPatterns.map(e => new GlobPatternSerializer().serialize(e, _forceTypeHint))
                : undefined,
            patternMappings: entity.patternMappings
                ? entity.patternMappings.map(e => new PatternMappingSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
