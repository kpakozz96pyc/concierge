import { Serializer } from "@alf/core/models";
import { TravelGrantSickNoteActivity } from "@alf/models/sick-notes/travel-grant-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TravelGrantSickNoteActivitySerializer implements Serializer<TravelGrantSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TravelGrantSickNoteActivity
    deserialize(data: any): TravelGrantSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TravelGrantSickNoteActivity(copy);
    }

    serialize(entity: TravelGrantSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TravelGrantSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: TravelGrantSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            type: entity.type,
            harReiseTilskudd: entity.harReiseTilskudd
        };
    }
}
