
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationSickNoteActivity } from "./sickness-benefit-application-sick-note-activity";
import { SicknessBenefitApplicationPeriod } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodSickNote extends SicknessBenefitApplicationPeriod {

    static $name = "SicknessBenefitApplicationPeriodSickNote";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodSickNote, ALF.Shared.Dto"

    activityType: SicknessBenefitApplicationActivityType;
    activity?: SicknessBenefitApplicationSickNoteActivity;

    constructor(data?: Partial<SicknessBenefitApplicationPeriodSickNote>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplicationPeriodSickNote.typeNameHint;
    }
}
