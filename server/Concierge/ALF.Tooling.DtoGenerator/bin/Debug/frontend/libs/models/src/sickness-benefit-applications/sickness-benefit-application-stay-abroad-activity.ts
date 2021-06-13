
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationOtherAbsenceActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-other-absence-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationStayAbroadActivity extends SicknessBenefitApplicationOtherAbsenceActivity {

    static $name = "SicknessBenefitApplicationStayAbroadActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationStayAbroadActivity, ALF.Shared.Dto"

    type: SicknessBenefitApplicationActivityType;
    hasAppliedForSicknessBenefit: boolean;

    constructor(data?: Partial<SicknessBenefitApplicationStayAbroadActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplicationStayAbroadActivity.typeNameHint;
    }
}
