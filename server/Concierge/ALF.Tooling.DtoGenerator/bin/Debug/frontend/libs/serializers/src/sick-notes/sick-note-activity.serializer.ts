import { ActivityNotPossibleSickNoteActivitySerializer } from "./activity-not-possible-sick-note-activity.serializer";
import { TreatmentSickNoteActivitySerializer } from "./treatment-sick-note-activity.serializer";
import { PendingSickNoteActivitySerializer } from "./pending-sick-note-activity.serializer";
import { PartialSickNoteActivitySerializer } from "./partial-sick-note-activity.serializer";
import { TravelGrantSickNoteActivitySerializer } from "./travel-grant-sick-note-activity.serializer";
import { ActivityNotPossibleSickNoteActivity } from "@alf/models/sick-notes/activity-not-possible-sick-note-activity";
import { TreatmentSickNoteActivity } from "@alf/models/sick-notes/treatment-sick-note-activity";
import { PendingSickNoteActivity } from "@alf/models/sick-notes/pending-sick-note-activity";
import { PartialSickNoteActivity } from "@alf/models/sick-notes/partial-sick-note-activity";
import { TravelGrantSickNoteActivity } from "@alf/models/sick-notes/travel-grant-sick-note-activity";
import { Serializer } from "@alf/core/models";
import { SickNoteActivity } from "@alf/models/sick-notes/sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickNoteActivitySerializer implements Serializer<SickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SickNoteActivity
    deserialize(data: any): SickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.ActivityNotPossibleSickNoteActivity, ALF.Shared.Dto")
            return new ActivityNotPossibleSickNoteActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.TreatmentSickNoteActivity, ALF.Shared.Dto")
            return new TreatmentSickNoteActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.PendingSickNoteActivity, ALF.Shared.Dto")
            return new PendingSickNoteActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.PartialSickNoteActivity, ALF.Shared.Dto")
            return new PartialSickNoteActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.TravelGrantSickNoteActivity, ALF.Shared.Dto")
            return new TravelGrantSickNoteActivitySerializer().deserialize(data);

        throw new Error("Unable to deserialize SickNoteActivity, cannot infer type from " + data.$type);
    }

    serialize(entity: SickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: SickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.ActivityNotPossibleSickNoteActivity, ALF.Shared.Dto")
            return new ActivityNotPossibleSickNoteActivitySerializer().serialize(entity as ActivityNotPossibleSickNoteActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.TreatmentSickNoteActivity, ALF.Shared.Dto")
            return new TreatmentSickNoteActivitySerializer().serialize(entity as TreatmentSickNoteActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.PendingSickNoteActivity, ALF.Shared.Dto")
            return new PendingSickNoteActivitySerializer().serialize(entity as PendingSickNoteActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.PartialSickNoteActivity, ALF.Shared.Dto")
            return new PartialSickNoteActivitySerializer().serialize(entity as PartialSickNoteActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.TravelGrantSickNoteActivity, ALF.Shared.Dto")
            return new TravelGrantSickNoteActivitySerializer().serialize(entity as TravelGrantSickNoteActivity, _forceTypeHint);

        throw new Error("Unable to serialize SickNoteActivity, cannot infer type from " + entity.$type);
    }
}
