import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { AltinnMockFeature } from "@alf/models/feature-providers/altinn-mock-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnMockFeatureSerializer implements Serializer<AltinnMockFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AltinnMockFeature
    deserialize(data: any): AltinnMockFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new AltinnMockFeature(copy);
    }

    serialize(entity: AltinnMockFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AltinnMockFeature, _forceTypeHint?: boolean): any
    serialize(entity: AltinnMockFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            featureId: entity.featureId,
            description: entity.description,
            status: FeatureStatus[entity.status],
            overrideLevel: entity.overrideLevel,
            isFrontendReadOnly: entity.isFrontendReadOnly,
            isVisibleInProduction: entity.isVisibleInProduction,
            isVisibleInDevelopment: entity.isVisibleInDevelopment,
            isVisible: entity.isVisible,
            id: entity.id,
            companyId: entity.companyId,
            isDevEnv: entity.isDevEnv
        };
    }
}
