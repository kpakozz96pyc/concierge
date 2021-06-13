import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { AutoImportSourceFileFeature } from "@alf/models/feature-providers/auto-import-source-file-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AutoImportSourceFileFeatureSerializer implements Serializer<AutoImportSourceFileFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AutoImportSourceFileFeature
    deserialize(data: any): AutoImportSourceFileFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new AutoImportSourceFileFeature(copy);
    }

    serialize(entity: AutoImportSourceFileFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AutoImportSourceFileFeature, _forceTypeHint?: boolean): any
    serialize(entity: AutoImportSourceFileFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            featureId: entity.featureId,
            description: entity.description,
            status: FeatureStatus[entity.status],
            overrideLevel: entity.overrideLevel,
            useFileSystem: entity.useFileSystem,
            id: entity.id,
            companyId: entity.companyId,
            isDevEnv: entity.isDevEnv
        };
    }
}
