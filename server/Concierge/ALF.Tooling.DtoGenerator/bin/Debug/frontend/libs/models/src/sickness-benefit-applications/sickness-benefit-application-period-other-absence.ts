
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationOtherAbsenceActivity } from "./sickness-benefit-application-other-absence-activity";
import { SicknessBenefitApplicationPeriod } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodOtherAbsence extends SicknessBenefitApplicationPeriod {

    static $name = "SicknessBenefitApplicationPeriodOtherAbsence";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodOtherAbsence, ALF.Shared.Dto"

    activityType: SicknessBenefitApplicationActivityType;
    activity?: SicknessBenefitApplicationOtherAbsenceActivity;

    constructor(data?: Partial<SicknessBenefitApplicationPeriodOtherAbsence>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplicationPeriodOtherAbsence.typeNameHint;
    }
}
