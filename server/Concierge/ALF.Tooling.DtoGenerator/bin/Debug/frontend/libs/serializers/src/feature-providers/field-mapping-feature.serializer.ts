import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { FieldMappingFeature } from "@alf/models/feature-providers/field-mapping-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldMappingFeatureSerializer implements Serializer<FieldMappingFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldMappingFeature
    deserialize(data: any): FieldMappingFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new FieldMappingFeature(copy);
    }

    serialize(entity: FieldMappingFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldMappingFeature, _forceTypeHint?: boolean): any
    serialize(entity: FieldMappingFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
