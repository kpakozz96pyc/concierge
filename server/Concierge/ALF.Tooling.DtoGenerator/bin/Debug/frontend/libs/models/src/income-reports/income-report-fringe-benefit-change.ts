
import { IncomeReportFringeBenefitType } from "./enums/income-report-fringe-benefit-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportFringeBenefitChange {

    static $name = "IncomeReportFringeBenefitChange";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportFringeBenefitChange, ALF.Shared.Dto"

    type: IncomeReportFringeBenefitType;
    from: Date;
    amountPerMonth?: number;
    employerPays: boolean;

    constructor(data?: Partial<IncomeReportFringeBenefitChange>) {
        Object.assign(this, data);
    }
}
