import { SicknessBenefitApplicationSickNoteActivitySerializer } from "./sickness-benefit-application-sick-note-activity.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationPeriodSickNote } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-sick-note";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodSickNoteSerializer implements Serializer<SicknessBenefitApplicationPeriodSickNote> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationPeriodSickNote
    deserialize(data: any): SicknessBenefitApplicationPeriodSickNote | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.activity = new SicknessBenefitApplicationSickNoteActivitySerializer().deserialize(copy.activity);

        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new SicknessBenefitApplicationPeriodSickNote(copy);
    }

    serialize(entity: SicknessBenefitApplicationPeriodSickNote | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationPeriodSickNote, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationPeriodSickNote | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            activityType: entity.activityType,
            activity: new SicknessBenefitApplicationSickNoteActivitySerializer().serialize(entity.activity, _forceTypeHint),
            from: serializeDate(entity.from),
            to: serializeDate(entity.to)
        };
    }
}
