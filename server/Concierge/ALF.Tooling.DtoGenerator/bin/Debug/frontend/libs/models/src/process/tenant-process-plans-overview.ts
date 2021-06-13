
import { TenantProcessPeriodSummary } from "./tenant-process-period-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TenantProcessPlansOverview {

    static $name = "TenantProcessPlansOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.TenantProcessPlansOverview, ALF.Shared.Dto"

    requiresManualActionCount: number;
    activeProcessPlanAndPeriodCount: number;
    recentlyFinishedCount: number;
    processPlansRunningCount: number;
    processPeriodSummaries: TenantProcessPeriodSummary[] = [];

    constructor(data?: Partial<TenantProcessPlansOverview>) {
        Object.assign(this, data);
    }
}
