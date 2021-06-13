
import { WorkTaskContextType } from "./enums/work-task-context-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkTaskContext {

    static $name = "WorkTaskContext";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkTaskContext, ALF.Shared.Dto"

    type: WorkTaskContextType;
    encodedId?: string;
    companyId?: string;
    employeeId?: string;
    periodId?: string;
    year?: number;
    month?: number;

    constructor(data?: Partial<WorkTaskContext>) {
        Object.assign(this, data);
    }
}
