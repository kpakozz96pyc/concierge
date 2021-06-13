
import { SickNoteActivityType } from "./enums/sick-note-activity-type";
import { SickNoteActivity } from "@alf/models/sick-notes/sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingSickNoteActivity extends SickNoteActivity {

    static $name = "PendingSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.PendingSickNoteActivity, ALF.Shared.Dto"

    type: SickNoteActivityType;
    avventendeSykmelding?: string;

    constructor(data?: Partial<PendingSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = PendingSickNoteActivity.typeNameHint;
    }
}
