import { ImmediateManagerFeatureSerializer } from "./immediate-manager-feature.serializer";
import { SicknessBenefitFeatureSerializer } from "./sickness-benefit-feature.serializer";
import { ImmediateManagerFeature } from "@alf/models/feature-providers/immediate-manager-feature";
import { SicknessBenefitFeature } from "@alf/models/feature-providers/sickness-benefit-feature";
import { Serializer } from "@alf/core/models";
import { AbsenceSubFeature } from "@alf/models/feature-providers/absence-sub-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceSubFeatureSerializer implements Serializer<AbsenceSubFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceSubFeature
    deserialize(data: any): AbsenceSubFeature | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImmediateManagerFeature, ALF.Shared.Dto")
            return new ImmediateManagerFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.SicknessBenefitFeature, ALF.Shared.Dto")
            return new SicknessBenefitFeatureSerializer().deserialize(data);

        throw new Error("Unable to deserialize AbsenceSubFeature, cannot infer type from " + data.$type);
    }

    serialize(entity: AbsenceSubFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceSubFeature, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceSubFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImmediateManagerFeature, ALF.Shared.Dto")
            return new ImmediateManagerFeatureSerializer().serialize(entity as ImmediateManagerFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.SicknessBenefitFeature, ALF.Shared.Dto")
            return new SicknessBenefitFeatureSerializer().serialize(entity as SicknessBenefitFeature, _forceTypeHint);

        throw new Error("Unable to serialize AbsenceSubFeature, cannot infer type from " + entity.$type);
    }
}
