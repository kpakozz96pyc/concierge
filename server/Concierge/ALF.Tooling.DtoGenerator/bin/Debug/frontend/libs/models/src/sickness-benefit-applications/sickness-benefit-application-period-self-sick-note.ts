
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationPeriod } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodSelfSickNote extends SicknessBenefitApplicationPeriod {

    static $name = "SicknessBenefitApplicationPeriodSelfSickNote";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodSelfSickNote, ALF.Shared.Dto"

    activityType: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<SicknessBenefitApplicationPeriodSelfSickNote>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplicationPeriodSelfSickNote.typeNameHint;
    }
}
