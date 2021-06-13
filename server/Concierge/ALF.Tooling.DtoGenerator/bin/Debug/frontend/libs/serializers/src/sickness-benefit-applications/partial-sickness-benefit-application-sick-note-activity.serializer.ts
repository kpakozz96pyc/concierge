import { Serializer } from "@alf/core/models";
import { PartialSicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/partial-sickness-benefit-application-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PartialSicknessBenefitApplicationSickNoteActivitySerializer implements Serializer<PartialSicknessBenefitApplicationSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PartialSicknessBenefitApplicationSickNoteActivity
    deserialize(data: any): PartialSicknessBenefitApplicationSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PartialSicknessBenefitApplicationSickNoteActivity(copy);
    }

    serialize(entity: PartialSicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PartialSicknessBenefitApplicationSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: PartialSicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            sykmeldingsgrad: entity.sykmeldingsgrad
        };
    }
}
