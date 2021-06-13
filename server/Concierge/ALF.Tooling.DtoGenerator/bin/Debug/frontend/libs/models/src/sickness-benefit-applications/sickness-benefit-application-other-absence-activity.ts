
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationOtherAbsenceActivity {

    static $name = "SicknessBenefitApplicationOtherAbsenceActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationOtherAbsenceActivity, ALF.Shared.Dto"

    $type: string;
    type: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<SicknessBenefitApplicationOtherAbsenceActivity>) {
        Object.assign(this, data);
    }
}
