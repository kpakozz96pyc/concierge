
import { SicknessBenefitApplicationOtherIncomeSourceType } from "./enums/sickness-benefit-application-other-income-source-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationOtherIncomeSource {

    static $name = "SicknessBenefitApplicationOtherIncomeSource";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationOtherIncomeSource, ALF.Shared.Dto"

    type: SicknessBenefitApplicationOtherIncomeSourceType;
    isOnSickLeave: boolean;

    constructor(data?: Partial<SicknessBenefitApplicationOtherIncomeSource>) {
        Object.assign(this, data);
    }
}
