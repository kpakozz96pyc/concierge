
import { SickNoteActivityType } from "./enums/sick-note-activity-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickNoteActivity {

    static $name = "SickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.SickNoteActivity, ALF.Shared.Dto"

    $type: string;
    type: SickNoteActivityType;

    constructor(data?: Partial<SickNoteActivity>) {
        Object.assign(this, data);
    }
}
