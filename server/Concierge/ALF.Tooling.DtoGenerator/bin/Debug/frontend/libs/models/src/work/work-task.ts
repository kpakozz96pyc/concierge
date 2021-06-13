
import { WorkTaskType } from "./enums/work-task-type";
import { WorkTaskContext } from "./work-task-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WorkTaskId = string;

export class WorkTask {

    static $name = "WorkTask";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkTask, ALF.Shared.Dto"

    id: WorkTaskId;
    type: WorkTaskType;
    changedAt: Date;
    changedByUserId?: string;
    changedByUsername?: string;
    title?: string;
    description?: string;
    deadline?: Date;
    assignedTo?: string;
    completed: boolean;
    context: WorkTaskContext[] = [];

    constructor(data?: Partial<WorkTask>) {
        Object.assign(this, data);
    }
}
