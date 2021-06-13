import { Serializer } from "@alf/core/models";
import { GlobPattern } from "@alf/models/auto-import/glob-pattern";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GlobPatternSerializer implements Serializer<GlobPattern> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GlobPattern
    deserialize(data: any): GlobPattern | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GlobPattern(copy);
    }

    serialize(entity: GlobPattern | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GlobPattern, _forceTypeHint?: boolean): any
    serialize(entity: GlobPattern | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GlobPattern.typeNameHint : undefined,
            id: entity.id,
            autoImportDefinitionId: entity.autoImportDefinitionId,
            pattern: entity.pattern
        };
    }
}
