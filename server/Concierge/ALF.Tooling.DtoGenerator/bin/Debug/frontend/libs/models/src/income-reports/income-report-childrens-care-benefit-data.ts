
import { IncomeReportBenefit } from "./enums/income-report-benefit";
import { IncomeReportEmploymentPayReduction } from "./enums/income-report-employment-pay-reduction";
import { IncomeReportReimbursementChange } from "./income-report-reimbursement-change";
import { IncomeReportPeriod } from "./income-report-period";
import { IncomeReportBenefitData } from "@alf/models/income-reports/income-report-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportChildrensCareBenefitData extends IncomeReportBenefitData {

    static $name = "IncomeReportChildrensCareBenefitData";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportChildrensCareBenefitData, ALF.Shared.Dto"

    type: IncomeReportBenefit;
    firstDayOfAbsence: Date;
    reimbursementChanges: IncomeReportReimbursementChange[] = [];
    employmentPayReduction?: IncomeReportEmploymentPayReduction;
    vacationPeriods: IncomeReportPeriod[] = [];

    constructor(data?: Partial<IncomeReportChildrensCareBenefitData>) {
        super(data);
        Object.assign(this, data);
        this.$type = IncomeReportChildrensCareBenefitData.typeNameHint;
    }
}
