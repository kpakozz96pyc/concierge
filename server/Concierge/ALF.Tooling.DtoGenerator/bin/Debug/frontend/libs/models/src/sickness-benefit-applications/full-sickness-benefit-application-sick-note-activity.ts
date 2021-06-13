
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FullSicknessBenefitApplicationSickNoteActivity extends SicknessBenefitApplicationSickNoteActivity {

    static $name = "FullSicknessBenefitApplicationSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.FullSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto"

    type: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<FullSicknessBenefitApplicationSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = FullSicknessBenefitApplicationSickNoteActivity.typeNameHint;
    }
}
