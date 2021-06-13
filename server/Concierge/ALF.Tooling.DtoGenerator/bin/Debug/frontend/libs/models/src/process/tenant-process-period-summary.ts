
import { ProcessPlanSummaryType } from "./enums/process-plan-summary-type";
import { ProcessManualAction } from "./enums/process-manual-action";
import { PayrollPeriodDisplayInfo } from "../periods/payroll-period-display-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TenantProcessPeriodSummary {

    static $name = "TenantProcessPeriodSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.TenantProcessPeriodSummary, ALF.Shared.Dto"

    companyId: string;
    planId?: string;
    summaryType: ProcessPlanSummaryType;
    title?: string;
    subTitle?: string;
    manualActionNeeded: ProcessManualAction;
    deadline?: Date;
    period?: PayrollPeriodDisplayInfo;

    constructor(data?: Partial<TenantProcessPeriodSummary>) {
        Object.assign(this, data);
    }
}
