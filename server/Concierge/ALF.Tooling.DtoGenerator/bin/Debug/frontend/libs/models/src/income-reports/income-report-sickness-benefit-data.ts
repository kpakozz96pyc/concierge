
import { IncomeReportBenefit } from "./enums/income-report-benefit";
import { IncomeReportEmployerPeriodPayReduction } from "./enums/income-report-employer-period-pay-reduction";
import { IncomeReportPeriod } from "./income-report-period";
import { IncomeReportReimbursementChange } from "./income-report-reimbursement-change";
import { IncomeReportBenefitData } from "@alf/models/income-reports/income-report-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportSicknessBenefitData extends IncomeReportBenefitData {

    static $name = "IncomeReportSicknessBenefitData";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportSicknessBenefitData, ALF.Shared.Dto"

    type: IncomeReportBenefit;
    firstDayOfAbsence?: Date;
    employerPeriodGrossPaid?: number;
    employerPeriodPayReduction?: IncomeReportEmployerPeriodPayReduction;
    employerPeriods: IncomeReportPeriod[] = [];
    reimbursementChanges: IncomeReportReimbursementChange[] = [];

    constructor(data?: Partial<IncomeReportSicknessBenefitData>) {
        super(data);
        Object.assign(this, data);
        this.$type = IncomeReportSicknessBenefitData.typeNameHint;
    }
}
