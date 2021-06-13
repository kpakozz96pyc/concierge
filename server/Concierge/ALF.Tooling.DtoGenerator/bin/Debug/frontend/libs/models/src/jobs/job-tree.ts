
import { JobHierarchyNode } from "./job-hierarchy-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type JobTreeId = string;

export class JobTree {

    static $name = "JobTree";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobTree, ALF.Shared.Dto"

    id: JobTreeId;
    tree: JobHierarchyNode[] = [];

    constructor(data?: Partial<JobTree>) {
        Object.assign(this, data);
    }
}
