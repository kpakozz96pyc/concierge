﻿
import { SicknessBenefitApplicationActivityType } from "./enums/sickness-benefit-application-activity-type";
import { SicknessBenefitApplicationOtherAbsenceActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-other-absence-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationVacationActivity extends SicknessBenefitApplicationOtherAbsenceActivity {

    static $name = "SicknessBenefitApplicationVacationActivity";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationVacationActivity, ALF.Shared.Dto"

    type: SicknessBenefitApplicationActivityType;

    constructor(data?: Partial<SicknessBenefitApplicationVacationActivity>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplicationVacationActivity.typeNameHint;
    }
}