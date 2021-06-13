
import { SickNoteActivityType } from "./enums/sick-note-activity-type";
import { SickNoteActivity } from "@alf/models/sick-notes/sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TravelGrantSickNoteActivity extends SickNoteActivity {

    static $name = "TravelGrantSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.TravelGrantSickNoteActivity, ALF.Shared.Dto"

    type: SickNoteActivityType;
    harReiseTilskudd: boolean;

    constructor(data?: Partial<TravelGrantSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = TravelGrantSickNoteActivity.typeNameHint;
    }
}
