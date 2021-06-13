
import { JobDisplayStatus } from "./enums/job-display-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobHierarchyNode {

    static $name = "JobHierarchyNode";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobHierarchyNode, ALF.Shared.Dto"

    id?: string;
    jobId?: string;
    parentJobId?: string;
    children: JobHierarchyNode[] = [];
    jobType?: string;
    jobStatus: JobDisplayStatus;

    constructor(data?: Partial<JobHierarchyNode>) {
        Object.assign(this, data);
    }
}
