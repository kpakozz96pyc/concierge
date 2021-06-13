import { JobDisplayStatus } from "@alf/models/jobs/enums/job-display-status";
import { Serializer } from "@alf/core/models";
import { JobHierarchyNode } from "@alf/models/jobs/job-hierarchy-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobHierarchyNodeSerializer implements Serializer<JobHierarchyNode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobHierarchyNode
    deserialize(data: any): JobHierarchyNode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.children = (copy.children || []).map(new JobHierarchyNodeSerializer().deserialize);

        copy.jobStatus = JobDisplayStatus[copy.jobStatus];

        return new JobHierarchyNode(copy);
    }

    serialize(entity: JobHierarchyNode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobHierarchyNode, _forceTypeHint?: boolean): any
    serialize(entity: JobHierarchyNode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobHierarchyNode.typeNameHint : undefined,
            id: entity.id,
            jobId: entity.jobId,
            parentJobId: entity.parentJobId,
            children: entity.children
                ? entity.children.map(e => new JobHierarchyNodeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            jobType: entity.jobType,
            jobStatus: JobDisplayStatus[entity.jobStatus]
        };
    }
}
