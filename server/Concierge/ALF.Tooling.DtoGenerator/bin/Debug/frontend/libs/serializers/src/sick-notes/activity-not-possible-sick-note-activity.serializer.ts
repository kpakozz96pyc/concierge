import { Serializer } from "@alf/core/models";
import { ActivityNotPossibleSickNoteActivity } from "@alf/models/sick-notes/activity-not-possible-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ActivityNotPossibleSickNoteActivitySerializer implements Serializer<ActivityNotPossibleSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ActivityNotPossibleSickNoteActivity
    deserialize(data: any): ActivityNotPossibleSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ActivityNotPossibleSickNoteActivity(copy);
    }

    serialize(entity: ActivityNotPossibleSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ActivityNotPossibleSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: ActivityNotPossibleSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            beskrivelse: entity.beskrivelse,
            manglendeTilrettelegging: entity.manglendeTilrettelegging
        };
    }
}
