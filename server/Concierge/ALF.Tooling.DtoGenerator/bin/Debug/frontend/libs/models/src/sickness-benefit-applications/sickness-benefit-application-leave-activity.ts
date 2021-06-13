
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationOtherAbsenceActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-other-absence-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationLeaveActivity extends SicknessBenefitApplicationOtherAbsenceActivity {

    static $name = "SicknessBenefitApplicationLeaveActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationLeaveActivity, ALF.Shared.Dto"

    type: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<SicknessBenefitApplicationLeaveActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplicationLeaveActivity.typeNameHint;
    }
}
