import { Serializer } from "@alf/core/models";
import { PendingSickNoteActivity } from "@alf/models/sick-notes/pending-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingSickNoteActivitySerializer implements Serializer<PendingSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PendingSickNoteActivity
    deserialize(data: any): PendingSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PendingSickNoteActivity(copy);
    }

    serialize(entity: PendingSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PendingSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: PendingSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            avventendeSykmelding: entity.avventendeSykmelding
        };
    }
}
