
import { IncomeReportBenefit } from "./enums/income-report-benefit";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportBenefitData {

    static $name = "IncomeReportBenefitData";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportBenefitData, ALF.Shared.Dto"

    $type: string;
    type: IncomeReportBenefit;

    constructor(data?: Partial<IncomeReportBenefitData>) {
        Object.assign(this, data);
    }
}
