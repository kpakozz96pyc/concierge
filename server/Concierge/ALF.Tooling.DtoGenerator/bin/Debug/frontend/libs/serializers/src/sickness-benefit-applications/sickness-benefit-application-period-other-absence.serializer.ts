import { SicknessBenefitApplicationOtherAbsenceActivitySerializer } from "./sickness-benefit-application-other-absence-activity.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationPeriodOtherAbsence } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-other-absence";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodOtherAbsenceSerializer implements Serializer<SicknessBenefitApplicationPeriodOtherAbsence> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationPeriodOtherAbsence
    deserialize(data: any): SicknessBenefitApplicationPeriodOtherAbsence | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.activity = new SicknessBenefitApplicationOtherAbsenceActivitySerializer().deserialize(copy.activity);

        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new SicknessBenefitApplicationPeriodOtherAbsence(copy);
    }

    serialize(entity: SicknessBenefitApplicationPeriodOtherAbsence | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationPeriodOtherAbsence, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationPeriodOtherAbsence | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            activityType: entity.activityType,
            activity: new SicknessBenefitApplicationOtherAbsenceActivitySerializer().serialize(entity.activity, _forceTypeHint),
            from: serializeDate(entity.from),
            to: serializeDate(entity.to)
        };
    }
}
