
import { ProcessTaskStatus } from "./enums/process-task-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTaskId = string;

export class ProcessTask {

    static $name = "ProcessTask";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessTask, ALF.Shared.Dto"

    id: ProcessTaskId;
    companyId: string;
    processPlanId: string;
    stepId: string;
    templateId?: string;
    createdAt: Date;
    templateTaskCode?: string;
    templatePreviousTaskOrJobCode?: string;
    title: string;
    description?: string;
    status: ProcessTaskStatus;
    lastStatusChangedAt: Date;
    ordering: number;

    constructor(data?: Partial<ProcessTask>) {
        Object.assign(this, data);
    }
}
