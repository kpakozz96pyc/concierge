import { Serializer } from "@alf/core/models";
import { PartialSickNoteActivity } from "@alf/models/sick-notes/partial-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PartialSickNoteActivitySerializer implements Serializer<PartialSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PartialSickNoteActivity
    deserialize(data: any): PartialSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PartialSickNoteActivity(copy);
    }

    serialize(entity: PartialSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PartialSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: PartialSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            gradering: entity.gradering,
            harReiseTilskudd: entity.harReiseTilskudd
        };
    }
}
