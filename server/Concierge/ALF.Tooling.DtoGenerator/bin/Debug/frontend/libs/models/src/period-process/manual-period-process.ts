
import { PeriodProcessType } from "./enums/period-process-type";
import { PeriodProcessStatus } from "./enums/period-process-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessId = string;

export class ManualPeriodProcess {

    static $name = "ManualPeriodProcess";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcess, ALF.Shared.Dto"

    $type: string;
    id: ManualPeriodProcessId;
    companyId: string;
    periodNumber: number;
    periodId: string;
    ordering: number;
    periodProcessType: PeriodProcessType;
    status: PeriodProcessStatus;
    statusDetails?: string;
    waitingForJobId?: string;

    constructor(data?: Partial<ManualPeriodProcess>) {
        Object.assign(this, data);
    }
}
