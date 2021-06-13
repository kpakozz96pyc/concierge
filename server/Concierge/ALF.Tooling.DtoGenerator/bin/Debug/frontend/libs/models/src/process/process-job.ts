
import { ProcessJobStatus } from "./enums/process-job-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessJobId = string;

export class ProcessJob {

    static $name = "ProcessJob";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessJob, ALF.Shared.Dto"

    id: ProcessJobId;
    companyId: string;
    processPlanId: string;
    stepId: string;
    templateId?: string;
    automaticProcessType?: string;
    templateJobCode?: string;
    templatePreviousTaskOrJobCode?: string;
    reservationToken?: string;
    createdAt: Date;
    title: string;
    description?: string;
    status: ProcessJobStatus;
    lastStatusChangedAt: Date;
    waitingForJobId?: string;
    ordering: number;
    errorId?: string;
    errorMessage?: string;
    isSkipped: boolean;
    archivedReportId?: string;

    constructor(data?: Partial<ProcessJob>) {
        Object.assign(this, data);
    }
}
