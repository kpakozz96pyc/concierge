import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { FeatureFeature } from "@alf/models/feature-providers/feature-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FeatureFeatureSerializer implements Serializer<FeatureFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FeatureFeature
    deserialize(data: any): FeatureFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new FeatureFeature(copy);
    }

    serialize(entity: FeatureFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FeatureFeature, _forceTypeHint?: boolean): any
    serialize(entity: FeatureFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            featureId: entity.featureId,
            description: entity.description,
            status: FeatureStatus[entity.status],
            overrideLevel: entity.overrideLevel,
            isVisibleInProduction: entity.isVisibleInProduction,
            isVisibleInDevelopment: entity.isVisibleInDevelopment,
            isVisible: entity.isVisible,
            id: entity.id,
            companyId: entity.companyId,
            isDevEnv: entity.isDevEnv
        };
    }
}
