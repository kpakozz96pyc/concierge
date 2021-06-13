
import { AccountingMonthRule } from "../cycle-create/enums/accounting-month-rule";
import { PeriodTaxDeductionType } from "../periods/enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "../periods/enums/period-garnishments-type";
import { PeriodNameMode } from "./enums/period-name-mode";
import { CompanyPayDayFormula } from "./enums/company-pay-day-formula";
import { PeriodPlanText } from "./period-plan-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanCustomizableFields {

    static $name = "PeriodPlanCustomizableFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.PeriodPlanCustomizableFields, ALF.Shared.Dto"

    processTemplateId?: string;
    companyPayDayFormula?: CompanyPayDayFormula;
    useCompanyPayDayFormula: boolean;
    payDateFormula?: string;
    createDateFormula?: string;
    doNotCreateFormula?: string;
    accountingMonthRule: AccountingMonthRule;
    subGroups: number[] = [];
    tableTaxDeduction: PeriodTaxDeductionType;
    percentTaxDeduction: PeriodTaxDeductionType;
    tableGarnishments: PeriodGarnishmentsType;
    percentGarnishments: PeriodGarnishmentsType;
    calculateCommonArrangements: boolean;
    stopRecurringTransactions: boolean;
    prepayDeduction: boolean;
    periodNameMode: PeriodNameMode;
    periodNameSimplePrefix?: string;
    periodNameAdvancedTemplate?: string;
    payslipTexts: PeriodPlanText[] = [];
    generateVacationPay: boolean;
    generateDeductionVacationPay: boolean;

    constructor(data?: Partial<PeriodPlanCustomizableFields>) {
        Object.assign(this, data);
    }
}
