
import { SickNoteActivityType } from "./enums/sick-note-activity-type";
import { SickNoteActivity } from "@alf/models/sick-notes/sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ActivityNotPossibleSickNoteActivity extends SickNoteActivity {

    static $name = "ActivityNotPossibleSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.ActivityNotPossibleSickNoteActivity, ALF.Shared.Dto"

    type: SickNoteActivityType;
    beskrivelse?: string;
    manglendeTilrettelegging: boolean;

    constructor(data?: Partial<ActivityNotPossibleSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = ActivityNotPossibleSickNoteActivity.typeNameHint;
    }
}
