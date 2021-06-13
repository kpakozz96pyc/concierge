
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationSickNoteActivity {

    static $name = "SicknessBenefitApplicationSickNoteActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto"

    $type: string;
    type: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<SicknessBenefitApplicationSickNoteActivity>) {
        Object.assign(this, data);
    }
}
