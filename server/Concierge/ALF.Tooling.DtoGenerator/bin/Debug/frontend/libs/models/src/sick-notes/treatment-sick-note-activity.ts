
import { SickNoteActivityType } from "./enums/sick-note-activity-type";
import { SickNoteActivity } from "@alf/models/sick-notes/sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TreatmentSickNoteActivity extends SickNoteActivity {

    static $name = "TreatmentSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.TreatmentSickNoteActivity, ALF.Shared.Dto"

    type: SickNoteActivityType;
    antallBehandlingsdagerUke: number;

    constructor(data?: Partial<TreatmentSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = TreatmentSickNoteActivity.typeNameHint;
    }
}
