
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationPeriod } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodApplication extends SicknessBenefitApplicationPeriod {

    static $name = "SicknessBenefitApplicationPeriodApplication";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodApplication, ALF.Shared.Dto"

    activityType: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<SicknessBenefitApplicationPeriodApplication>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplicationPeriodApplication.typeNameHint;
    }
}
