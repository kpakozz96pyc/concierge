
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { SickNoteEditableFields } from "@alf/models/sick-notes/sick-note-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SickNoteId = string;

export class SickNote extends SickNoteEditableFields {

    static $name = "SickNote";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.SickNote, ALF.Shared.Dto"

    id: SickNoteId;
    messageId?: any;
    companyId?: string;
    createdAt: Date;
    createdByUserId?: string;
    createdByUsername?: string;
    changedAt: Date;
    mode: AltinnBackend;
    isActive: boolean;
    isProcessing: boolean;
    hasError: boolean;

    constructor(data?: Partial<SickNote>) {
        super(data);
        Object.assign(this, data);
        this.$type = SickNote.typeNameHint;
    }
}
