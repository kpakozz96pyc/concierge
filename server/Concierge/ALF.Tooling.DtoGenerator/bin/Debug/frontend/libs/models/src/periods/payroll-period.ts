
import { PeriodStatus } from "./enums/period-status";
import { PeriodStatusActivity } from "./enums/period-status-activity";
import { PeriodTaxDeductionType } from "./enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "./enums/period-garnishments-type";
import { PeriodPayType } from "./enums/period-pay-type";
import { PaymentCycleFields } from "./payment-cycle-fields";
import { StopTransaction } from "./stop-transaction";
import { PeriodText } from "./period-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PayrollPeriodId = string;

export class PayrollPeriod {

    static $name = "PayrollPeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.PayrollPeriod, ALF.Shared.Dto"

    id: PayrollPeriodId;
    companyId: string;
    periodNumber: number;
    periodPlanId?: string;
    processPlanId?: string;
    isEmpty: boolean;
    isDone: boolean;
    processPlanWillBeInstantiated: boolean;
    description?: string;
    payDate: Date;
    availableDate?: Date;
    status: PeriodStatus;
    statusDate: Date;
    statusActivity: PeriodStatusActivity;
    subGroups: number[] = [];
    tableTaxDeduction: PeriodTaxDeductionType;
    percentTaxDeduction: PeriodTaxDeductionType;
    tableGarnishments: PeriodGarnishmentsType;
    percentGarnishments: PeriodGarnishmentsType;
    calculateCommonArrangements: boolean;
    year: number;
    month: number;
    transferTransactionsToNextPeriod: boolean;
    calculationsBlocked: boolean;
    mainRun: boolean;
    autoImportBlocked: boolean;
    startDate: Date;
    endDate: Date;
    processTemplateId?: string;
    periodState?: string;
    paymentCycles: { [key: string]: PaymentCycleFields } = {};
    stopTransactions: StopTransaction[] = [];
    texts: PeriodText[] = [];
    periodPayType: PeriodPayType;
    periodType?: string;
    prepayDeduction: boolean;
    instantiateProcessPlanOnDate?: Date;
    generateVacationPay: boolean;
    generateDeductionVacationPay: boolean;

    constructor(data?: Partial<PayrollPeriod>) {
        Object.assign(this, data);
    }
}
