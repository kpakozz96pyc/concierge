import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { WorkListFeature } from "@alf/models/feature-providers/work-list-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkListFeatureSerializer implements Serializer<WorkListFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkListFeature
    deserialize(data: any): WorkListFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new WorkListFeature(copy);
    }

    serialize(entity: WorkListFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkListFeature, _forceTypeHint?: boolean): any
    serialize(entity: WorkListFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
