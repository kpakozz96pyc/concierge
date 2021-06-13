
import { WorkItemStackType } from "./enums/work-item-stack-type";
import { WorkItem } from "@alf/models/work/work-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WorkItemStackId = string;

export class WorkItemStack extends WorkItem {

    static $name = "WorkItemStack";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemStack, ALF.Shared.Dto"

    stackType: WorkItemStackType;
    count: number;

    constructor(data?: Partial<WorkItemStack>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemStack.typeNameHint;
    }
}
