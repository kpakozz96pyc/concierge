﻿import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { ImportDefinitionFeature } from "@alf/models/feature-providers/import-definition-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionFeatureSerializer implements Serializer<ImportDefinitionFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportDefinitionFeature
    deserialize(data: any): ImportDefinitionFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new ImportDefinitionFeature(copy);
    }

    serialize(entity: ImportDefinitionFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportDefinitionFeature, _forceTypeHint?: boolean): any
    serialize(entity: ImportDefinitionFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
