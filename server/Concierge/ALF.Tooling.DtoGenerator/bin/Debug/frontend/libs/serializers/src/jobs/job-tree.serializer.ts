import { JobHierarchyNodeSerializer } from "./job-hierarchy-node.serializer";
import { Serializer } from "@alf/core/models";
import { JobTree } from "@alf/models/jobs/job-tree";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobTreeSerializer implements Serializer<JobTree> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobTree
    deserialize(data: any): JobTree | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.tree = (copy.tree || []).map(new JobHierarchyNodeSerializer().deserialize);

        return new JobTree(copy);
    }

    serialize(entity: JobTree | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobTree, _forceTypeHint?: boolean): any
    serialize(entity: JobTree | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobTree.typeNameHint : undefined,
            id: entity.id,
            tree: entity.tree
                ? entity.tree.map(e => new JobHierarchyNodeSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
