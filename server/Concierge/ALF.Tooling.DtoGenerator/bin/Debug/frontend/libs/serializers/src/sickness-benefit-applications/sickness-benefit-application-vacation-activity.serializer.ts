import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationVacationActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-vacation-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationVacationActivitySerializer implements Serializer<SicknessBenefitApplicationVacationActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationVacationActivity
    deserialize(data: any): SicknessBenefitApplicationVacationActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SicknessBenefitApplicationVacationActivity(copy);
    }

    serialize(entity: SicknessBenefitApplicationVacationActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationVacationActivity, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationVacationActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type
        };
    }
}
