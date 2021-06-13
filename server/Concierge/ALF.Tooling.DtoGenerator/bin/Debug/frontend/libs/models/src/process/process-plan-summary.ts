
import { ProcessPlanSummaryType } from "./enums/process-plan-summary-type";
import { ProcessPlanStatus } from "./enums/process-plan-status";
import { ProcessManualAction } from "./enums/process-manual-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessPlanSummaryId = string;

export class ProcessPlanSummary {

    static $name = "ProcessPlanSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessPlanSummary, ALF.Shared.Dto"

    id: ProcessPlanSummaryId;
    companyId: string;
    planId?: string;
    deadline?: Date;
    manualActionNeeded?: ProcessManualAction;
    periodId?: string;
    summaryType: ProcessPlanSummaryType;
    title: string;
    subTitle: string;
    status: ProcessPlanStatus;
    periodState?: string;
    jobCount: number;
    taskCount: number;
    completedJobCount: number;
    completedTaskCount: number;
    completedPercent: number;

    constructor(data?: Partial<ProcessPlanSummary>) {
        Object.assign(this, data);
    }
}
