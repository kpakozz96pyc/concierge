import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { IntegrationEmployeeFeature } from "@alf/models/feature-providers/integration-employee-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IntegrationEmployeeFeatureSerializer implements Serializer<IntegrationEmployeeFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IntegrationEmployeeFeature
    deserialize(data: any): IntegrationEmployeeFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new IntegrationEmployeeFeature(copy);
    }

    serialize(entity: IntegrationEmployeeFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IntegrationEmployeeFeature, _forceTypeHint?: boolean): any
    serialize(entity: IntegrationEmployeeFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
