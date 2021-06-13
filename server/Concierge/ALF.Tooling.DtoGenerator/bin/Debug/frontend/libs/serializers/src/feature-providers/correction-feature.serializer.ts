import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { CorrectionFeature } from "@alf/models/feature-providers/correction-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CorrectionFeatureSerializer implements Serializer<CorrectionFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CorrectionFeature
    deserialize(data: any): CorrectionFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new CorrectionFeature(copy);
    }

    serialize(entity: CorrectionFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CorrectionFeature, _forceTypeHint?: boolean): any
    serialize(entity: CorrectionFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
