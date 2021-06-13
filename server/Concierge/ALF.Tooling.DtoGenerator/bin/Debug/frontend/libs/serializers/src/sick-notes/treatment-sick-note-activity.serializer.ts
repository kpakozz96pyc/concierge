import { Serializer } from "@alf/core/models";
import { TreatmentSickNoteActivity } from "@alf/models/sick-notes/treatment-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TreatmentSickNoteActivitySerializer implements Serializer<TreatmentSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TreatmentSickNoteActivity
    deserialize(data: any): TreatmentSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TreatmentSickNoteActivity(copy);
    }

    serialize(entity: TreatmentSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TreatmentSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: TreatmentSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            antallBehandlingsdagerUke: entity.antallBehandlingsdagerUke
        };
    }
}
