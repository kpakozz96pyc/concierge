import { Serializer } from "@alf/core/models";
import { FullSicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/full-sickness-benefit-application-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FullSicknessBenefitApplicationSickNoteActivitySerializer implements Serializer<FullSicknessBenefitApplicationSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FullSicknessBenefitApplicationSickNoteActivity
    deserialize(data: any): FullSicknessBenefitApplicationSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FullSicknessBenefitApplicationSickNoteActivity(copy);
    }

    serialize(entity: FullSicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FullSicknessBenefitApplicationSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: FullSicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type
        };
    }
}
