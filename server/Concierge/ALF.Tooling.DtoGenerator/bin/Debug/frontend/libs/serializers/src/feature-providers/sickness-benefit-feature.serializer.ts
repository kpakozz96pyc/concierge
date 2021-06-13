import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitFeature } from "@alf/models/feature-providers/sickness-benefit-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitFeatureSerializer implements Serializer<SicknessBenefitFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitFeature
    deserialize(data: any): SicknessBenefitFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        if (copy.activeFrom !== undefined)
            copy.activeFrom = new Date(copy.activeFrom);

        return new SicknessBenefitFeature(copy);
    }

    serialize(entity: SicknessBenefitFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitFeature, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            featureId: entity.featureId,
            description: entity.description,
            status: FeatureStatus[entity.status],
            overrideLevel: entity.overrideLevel,
            reimbursementReceiptTypeMap: entity.reimbursementReceiptTypeMap,
            incomeReportTypes: entity.incomeReportTypes,
            mode: entity.mode,
            activeFrom: serializeDate(entity.activeFrom),
            paused: entity.paused,
            reimbursementReceiptTypes: entity.reimbursementReceiptTypes,
            id: entity.id,
            companyId: entity.companyId,
            isDevEnv: entity.isDevEnv
        };
    }
}
