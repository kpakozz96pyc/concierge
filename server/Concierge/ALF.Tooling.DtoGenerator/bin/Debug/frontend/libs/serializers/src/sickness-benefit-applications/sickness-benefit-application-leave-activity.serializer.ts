import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationLeaveActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-leave-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationLeaveActivitySerializer implements Serializer<SicknessBenefitApplicationLeaveActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationLeaveActivity
    deserialize(data: any): SicknessBenefitApplicationLeaveActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SicknessBenefitApplicationLeaveActivity(copy);
    }

    serialize(entity: SicknessBenefitApplicationLeaveActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationLeaveActivity, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationLeaveActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type
        };
    }
}
