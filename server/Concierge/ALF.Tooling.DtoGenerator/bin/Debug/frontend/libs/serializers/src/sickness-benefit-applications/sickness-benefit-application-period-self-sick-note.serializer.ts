import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationPeriodSelfSickNote } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-self-sick-note";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodSelfSickNoteSerializer implements Serializer<SicknessBenefitApplicationPeriodSelfSickNote> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationPeriodSelfSickNote
    deserialize(data: any): SicknessBenefitApplicationPeriodSelfSickNote | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new SicknessBenefitApplicationPeriodSelfSickNote(copy);
    }

    serialize(entity: SicknessBenefitApplicationPeriodSelfSickNote | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationPeriodSelfSickNote, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationPeriodSelfSickNote | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            activityType: entity.activityType,
            from: serializeDate(entity.from),
            to: serializeDate(entity.to)
        };
    }
}
