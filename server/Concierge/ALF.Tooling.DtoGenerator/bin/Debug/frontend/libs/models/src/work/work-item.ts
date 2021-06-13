
import { WorkItemType } from "./enums/work-item-type";
import { WorkItemContext } from "./work-item-context";
import { WorkItemAction } from "./work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WorkItemId = string;

export class WorkItem {

    static $name = "WorkItem";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItem, ALF.Shared.Dto"

    $type: string;
    id: WorkItemId;
    type: WorkItemType;
    entityId: string;
    categoryTitle?: string;
    title?: string;
    description?: string;
    context: WorkItemContext[] = [];
    subContext: WorkItemContext[] = [];
    actions: WorkItemAction[] = [];
    deadline?: Date;
    assignedTo?: string;
    hashedValue: string;

    constructor(data?: Partial<WorkItem>) {
        Object.assign(this, data);
    }
}
