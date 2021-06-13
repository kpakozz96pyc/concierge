import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationStayAbroadActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-stay-abroad-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationStayAbroadActivitySerializer implements Serializer<SicknessBenefitApplicationStayAbroadActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationStayAbroadActivity
    deserialize(data: any): SicknessBenefitApplicationStayAbroadActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SicknessBenefitApplicationStayAbroadActivity(copy);
    }

    serialize(entity: SicknessBenefitApplicationStayAbroadActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationStayAbroadActivity, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationStayAbroadActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            hasAppliedForSicknessBenefit: entity.hasAppliedForSicknessBenefit
        };
    }
}
