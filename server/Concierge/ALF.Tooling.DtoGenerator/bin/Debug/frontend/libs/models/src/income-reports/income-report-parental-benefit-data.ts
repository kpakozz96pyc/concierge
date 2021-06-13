
import { IncomeReportBenefit } from "./enums/income-report-benefit";
import { IncomeReportReimbursementChange } from "./income-report-reimbursement-change";
import { IncomeReportBenefitData } from "@alf/models/income-reports/income-report-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportParentalBenefitData extends IncomeReportBenefitData {

    static $name = "IncomeReportParentalBenefitData";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportParentalBenefitData, ALF.Shared.Dto"

    type: IncomeReportBenefit;
    reimbursementChanges: IncomeReportReimbursementChange[] = [];
    startDate: Date;

    constructor(data?: Partial<IncomeReportParentalBenefitData>) {
        super(data);
        Object.assign(this, data);
        this.$type = IncomeReportParentalBenefitData.typeNameHint;
    }
}
