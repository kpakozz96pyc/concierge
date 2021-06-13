
import { IncomeReportBenefit } from "./enums/income-report-benefit";
import { IncomeReportEmploymentPayReduction } from "./enums/income-report-employment-pay-reduction";
import { IncomeReportPeriod } from "./income-report-period";
import { IncomeReportReimbursementChange } from "./income-report-reimbursement-change";
import { IncomeReportBenefitData } from "@alf/models/income-reports/income-report-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportPregnancyBenefitData extends IncomeReportBenefitData {

    static $name = "IncomeReportPregnancyBenefitData";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportPregnancyBenefitData, ALF.Shared.Dto"

    type: IncomeReportBenefit;
    firstDayOfAbsence: Date;
    vacationPeriods: IncomeReportPeriod[] = [];
    reimbursementChanges: IncomeReportReimbursementChange[] = [];
    employmentPayReduction?: IncomeReportEmploymentPayReduction;

    constructor(data?: Partial<IncomeReportPregnancyBenefitData>) {
        super(data);
        Object.assign(this, data);
        this.$type = IncomeReportPregnancyBenefitData.typeNameHint;
    }
}
