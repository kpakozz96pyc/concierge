
import { IncomeReportBenefit } from "./enums/income-report-benefit";
import { IncomeReportEmploymentPayReduction } from "./enums/income-report-employment-pay-reduction";
import { SickChildBenefitPartialAbsenceDay } from "./sick-child-benefit-partial-absence-day";
import { IncomeReportPeriod } from "./income-report-period";
import { IncomeReportBenefitData } from "@alf/models/income-reports/income-report-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportSickChildBenefitData extends IncomeReportBenefitData {

    static $name = "IncomeReportSickChildBenefitData";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportSickChildBenefitData, ALF.Shared.Dto"

    type: IncomeReportBenefit;
    employmentPayReduction?: IncomeReportEmploymentPayReduction;
    hasPaidObligatoryDays: boolean;
    partialAbsenceDays: SickChildBenefitPartialAbsenceDay[] = [];
    sickChildBenefitPeriods: IncomeReportPeriod[] = [];
    vacationPeriods: IncomeReportPeriod[] = [];

    constructor(data?: Partial<IncomeReportSickChildBenefitData>) {
        super(data);
        Object.assign(this, data);
        this.$type = IncomeReportSickChildBenefitData.typeNameHint;
    }
}
