import { SickNoteActivitySerializer } from "./sick-note-activity.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SickNotePeriod } from "@alf/models/sick-notes/sick-note-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickNotePeriodSerializer implements Serializer<SickNotePeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SickNotePeriod
    deserialize(data: any): SickNotePeriod | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        copy.activity = new SickNoteActivitySerializer().deserialize(copy.activity);

        return new SickNotePeriod(copy);
    }

    serialize(entity: SickNotePeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SickNotePeriod, _forceTypeHint?: boolean): any
    serialize(entity: SickNotePeriod | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SickNotePeriod.typeNameHint : undefined,
            from: serializeDate(entity.from),
            to: serializeDate(entity.to),
            activity: new SickNoteActivitySerializer().serialize(entity.activity, _forceTypeHint)
        };
    }
}
