
import { PeriodPayType } from "../periods/enums/period-pay-type";
import { AccountingMonthRule } from "../cycle-create/enums/accounting-month-rule";
import { PeriodTaxDeductionType } from "../periods/enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "../periods/enums/period-garnishments-type";
import { PeriodNameMode } from "./enums/period-name-mode";
import { CompanyPayDayFormula } from "./enums/company-pay-day-formula";
import { PaymentCycleCreateRule } from "../cycle-create/payment-cycle-create-rule";
import { PeriodPlanCustomization } from "./period-plan-customization";
import { PeriodPlanText } from "./period-plan-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PeriodPlanId = string;

export class PeriodPlan {

    static $name = "PeriodPlan";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.PeriodPlan, ALF.Shared.Dto"

    id: PeriodPlanId;
    periodPlanCode?: string;
    isDeleted: boolean;
    description?: string;
    isActive: boolean;
    periodType?: string;
    periodPayType: PeriodPayType;
    periodNumberFormula?: string;
    paymentCycleCreateRule?: PaymentCycleCreateRule;
    customizations: PeriodPlanCustomization[] = [];
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

    constructor(data?: Partial<PeriodPlan>) {
        Object.assign(this, data);
    }
}
