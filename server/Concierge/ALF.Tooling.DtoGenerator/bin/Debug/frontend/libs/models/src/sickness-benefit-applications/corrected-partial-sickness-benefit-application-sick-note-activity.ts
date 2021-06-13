
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CorrectedPartialSicknessBenefitApplicationSickNoteActivity extends SicknessBenefitApplicationSickNoteActivity {

    static $name = "CorrectedPartialSicknessBenefitApplicationSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.CorrectedPartialSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto"

    type: SicknessBenefitApplicationActivityType;
    sykmeldingsgrad: number;
    arbeidstimerNormaluke: number;
    arbeidsgrad: number;
    arbeidstimer?: number;

    constructor(data?: Partial<CorrectedPartialSicknessBenefitApplicationSickNoteActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = CorrectedPartialSicknessBenefitApplicationSickNoteActivity.typeNameHint;
    }
}
