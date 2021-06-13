import { Serializer } from "@alf/core/models";
import { CorrectedPartialSicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/corrected-partial-sickness-benefit-application-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CorrectedPartialSicknessBenefitApplicationSickNoteActivitySerializer implements Serializer<CorrectedPartialSicknessBenefitApplicationSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CorrectedPartialSicknessBenefitApplicationSickNoteActivity
    deserialize(data: any): CorrectedPartialSicknessBenefitApplicationSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CorrectedPartialSicknessBenefitApplicationSickNoteActivity(copy);
    }

    serialize(entity: CorrectedPartialSicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CorrectedPartialSicknessBenefitApplicationSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: CorrectedPartialSicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            sykmeldingsgrad: entity.sykmeldingsgrad,
            arbeidstimerNormaluke: entity.arbeidstimerNormaluke,
            arbeidsgrad: entity.arbeidsgrad,
            arbeidstimer: entity.arbeidstimer
        };
    }
}
