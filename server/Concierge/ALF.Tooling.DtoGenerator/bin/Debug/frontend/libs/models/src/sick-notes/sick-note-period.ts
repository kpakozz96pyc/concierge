
import { SickNoteActivity } from "./sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickNotePeriod {

    static $name = "SickNotePeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.SickNotePeriod, ALF.Shared.Dto"

    from: Date;
    to: Date;
    activity?: SickNoteActivity;

    constructor(data?: Partial<SickNotePeriod>) {
        Object.assign(this, data);
    }
}
