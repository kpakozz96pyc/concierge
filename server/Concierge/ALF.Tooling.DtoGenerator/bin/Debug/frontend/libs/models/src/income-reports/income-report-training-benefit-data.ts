
import { IncomeReportBenefit } from "./enums/income-report-benefit";
import { IncomeReportEmploymentPayReduction } from "./enums/income-report-employment-pay-reduction";
import { IncomeReportPeriod } from "./income-report-period";
import { IncomeReportReimbursementChange } from "./income-report-reimbursement-change";
import { IncomeReportBenefitData } from "@alf/models/income-reports/income-report-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportTrainingBenefitData extends IncomeReportBenefitData {

    static $name = "IncomeReportTrainingBenefitData";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportTrainingBenefitData, ALF.Shared.Dto"

    type: IncomeReportBenefit;
    firstDayOfAbsence: Date;
    vacationPeriods: IncomeReportPeriod[] = [];
    reimbursementChanges: IncomeReportReimbursementChange[] = [];
    employmentPayReduction?: IncomeReportEmploymentPayReduction;

    constructor(data?: Partial<IncomeReportTrainingBenefitData>) {
        super(data);
        Object.assign(this, data);
        this.$type = IncomeReportTrainingBenefitData.typeNameHint;
    }
}
