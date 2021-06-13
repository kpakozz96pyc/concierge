
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PartialSicknessBenefitApplicationSickNoteActivity extends SicknessBenefitApplicationSickNoteActivity {

    static $name = "PartialSicknessBenefitApplicationSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.PartialSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto"

    type: SicknessBenefitApplicationActivityType;
    sykmeldingsgrad: number;

    constructor(data?: Partial<PartialSicknessBenefitApplicationSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = PartialSicknessBenefitApplicationSickNoteActivity.typeNameHint;
    }
}
