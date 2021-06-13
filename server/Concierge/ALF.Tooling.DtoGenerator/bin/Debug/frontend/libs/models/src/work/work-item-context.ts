
import { WorkItemContextType } from "./enums/work-item-context-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemContext {

    static $name = "WorkItemContext";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemContext, ALF.Shared.Dto"

    type: WorkItemContextType;
    value?: any;
    context: WorkItemContext[] = [];

    constructor(data?: Partial<WorkItemContext>) {
        Object.assign(this, data);
    }
}
