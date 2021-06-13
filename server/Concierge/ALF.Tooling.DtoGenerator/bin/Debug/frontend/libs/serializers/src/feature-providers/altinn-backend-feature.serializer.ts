import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { AltinnBackendFeature } from "@alf/models/feature-providers/altinn-backend-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnBackendFeatureSerializer implements Serializer<AltinnBackendFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AltinnBackendFeature
    deserialize(data: any): AltinnBackendFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new AltinnBackendFeature(copy);
    }

    serialize(entity: AltinnBackendFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AltinnBackendFeature, _forceTypeHint?: boolean): any
    serialize(entity: AltinnBackendFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            featureId: entity.featureId,
            description: entity.description,
            status: FeatureStatus[entity.status],
            overrideLevel: entity.overrideLevel,
            mode: entity.mode,
            includeArchived: entity.includeArchived,
            id: entity.id,
            companyId: entity.companyId,
            isDevEnv: entity.isDevEnv
        };
    }
}
