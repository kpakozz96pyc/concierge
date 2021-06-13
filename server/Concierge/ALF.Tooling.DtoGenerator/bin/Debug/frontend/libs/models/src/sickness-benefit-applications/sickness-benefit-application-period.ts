
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriod {

    static $name = "SicknessBenefitApplicationPeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriod, ALF.Shared.Dto"

    $type: string;
    from: Date;
    to: Date;
    activityType: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<SicknessBenefitApplicationPeriod>) {
        Object.assign(this, data);
    }
}
