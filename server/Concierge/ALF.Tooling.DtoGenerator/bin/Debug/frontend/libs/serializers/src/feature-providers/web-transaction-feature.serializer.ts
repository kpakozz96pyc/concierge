import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { WebTransactionFeature } from "@alf/models/feature-providers/web-transaction-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WebTransactionFeatureSerializer implements Serializer<WebTransactionFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WebTransactionFeature
    deserialize(data: any): WebTransactionFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new WebTransactionFeature(copy);
    }

    serialize(entity: WebTransactionFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WebTransactionFeature, _forceTypeHint?: boolean): any
    serialize(entity: WebTransactionFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
