
import { PeriodPayType } from "../periods/enums/period-pay-type";
import { PaymentCycle } from "../periods/enums/payment-cycle";
import { PeriodTaxDeductionType } from "../periods/enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "../periods/enums/period-garnishments-type";
import { PeriodPlanningStatus } from "../periods/enums/period-planning-status";
import { PeriodPlanningConflictStatus } from "../periods/enums/period-planning-conflict-status";
import { PeriodPlanId } from "./period-plan";
import { PeriodPlanUsageId } from "./period-plan-usage";
import { PlannedPeriodText } from "./planned-period-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PlannedPeriodId = string;

export class PlannedPeriod {

    static $name = "PlannedPeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.PlannedPeriod, ALF.Shared.Dto"

    id: PlannedPeriodId;
    periodPlanId: PeriodPlanId;
    periodPlanUsageId: PeriodPlanUsageId;
    companyId?: string;
    description?: string;
    periodNumber: number;
    doNotCreate: boolean;
    isPeriodCreated: boolean;
    willBeCreatedAt: Date;
    processTemplateId?: string;
    periodType?: string;
    periodPayType: PeriodPayType;
    year: number;
    month: number;
    accountingYear: number;
    accountingMonth: number;
    startDate: Date;
    endDate: Date;
    payDate: Date;
    subGroups: number[] = [];
    paymentCycle: PaymentCycle;
    tableTaxDeduction: PeriodTaxDeductionType;
    percentTaxDeduction: PeriodTaxDeductionType;
    tableGarnishments: PeriodGarnishmentsType;
    percentGarnishments: PeriodGarnishmentsType;
    calculateCommonArrangements: boolean;
    stopRecurringTransactions: boolean;
    isDirty: boolean;
    prepayDeduction: boolean;
    perYearSequenceNumber?: number;
    perMonthSequenceNumber?: number;
    originallyPlannedPeriodNumber?: number;
    payslipTexts: PlannedPeriodText[] = [];
    planningStatus: PeriodPlanningStatus;
    isLocked: boolean;
    planningConflictStatus?: PeriodPlanningConflictStatus;
    generateVacationPay: boolean;
    generateDeductionVacationPay: boolean;

    constructor(data?: Partial<PlannedPeriod>) {
        Object.assign(this, data);
    }
}
