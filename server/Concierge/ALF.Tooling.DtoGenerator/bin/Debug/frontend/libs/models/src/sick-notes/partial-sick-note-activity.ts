
import { SickNoteActivityType } from "./enums/sick-note-activity-type";
import { SickNoteActivity } from "@alf/models/sick-notes/sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PartialSickNoteActivity extends SickNoteActivity {

    static $name = "PartialSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.PartialSickNoteActivity, ALF.Shared.Dto"

    type: SickNoteActivityType;
    gradering: number;
    harReiseTilskudd: boolean;

    constructor(data?: Partial<PartialSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = PartialSickNoteActivity.typeNameHint;
    }
}
