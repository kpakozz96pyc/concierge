import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceFeature } from "@alf/models/feature-providers/absence-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceFeatureSerializer implements Serializer<AbsenceFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceFeature
    deserialize(data: any): AbsenceFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        if (copy.activeFrom !== undefined)
            copy.activeFrom = new Date(copy.activeFrom);

        return new AbsenceFeature(copy);
    }

    serialize(entity: AbsenceFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceFeature, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            featureId: entity.featureId,
            description: entity.description,
            status: FeatureStatus[entity.status],
            overrideLevel: entity.overrideLevel,
            activeFrom: serializeDate(entity.activeFrom),
            paused: entity.paused,
            showModeInFrontend: entity.showModeInFrontend,
            isVisibleInProduction: entity.isVisibleInProduction,
            isVisibleInDevelopment: entity.isVisibleInDevelopment,
            isVisible: entity.isVisible,
            id: entity.id,
            companyId: entity.companyId,
            isDevEnv: entity.isDevEnv
        };
    }
}
