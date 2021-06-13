import { BasicPopulationNodeSerializer } from "./basic-population-node.serializer";
import { PopulationLinkNodeSerializer } from "./population-link-node.serializer";
import { BasicPopulationNode } from "@alf/models/tree-structure/basic-population-node";
import { BooleanOperationNode } from "@alf/models/tree-structure/boolean-operation-node";
import { PopulationLinkNode } from "@alf/models/tree-structure/population-link-node";
import { AndNode } from "@alf/models/tree-structure/and-node";
import { OrNode } from "@alf/models/tree-structure/or-node";
import { Serializer } from "@alf/core/models";
import { PopulationTreeNode } from "@alf/models/tree-structure/population-tree-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationTreeNodeSerializer implements Serializer<PopulationTreeNode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PopulationTreeNode
    deserialize(data: any): PopulationTreeNode | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.BasicPopulationNode, ALF.Shared.Dto")
            return new BasicPopulationNodeSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.BooleanOperationNode, ALF.Shared.Dto")
            return new BooleanOperationNodeSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.PopulationLinkNode, ALF.Shared.Dto")
            return new PopulationLinkNodeSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.AndNode, ALF.Shared.Dto")
            return new AndNodeSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.OrNode, ALF.Shared.Dto")
            return new OrNodeSerializer().deserialize(data);

        throw new Error("Unable to deserialize PopulationTreeNode, cannot infer type from " + data.$type);
    }

    serialize(entity: PopulationTreeNode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PopulationTreeNode, _forceTypeHint?: boolean): any
    serialize(entity: PopulationTreeNode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.BasicPopulationNode, ALF.Shared.Dto")
            return new BasicPopulationNodeSerializer().serialize(entity as BasicPopulationNode, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.BooleanOperationNode, ALF.Shared.Dto")
            return new BooleanOperationNodeSerializer().serialize(entity as BooleanOperationNode, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.PopulationLinkNode, ALF.Shared.Dto")
            return new PopulationLinkNodeSerializer().serialize(entity as PopulationLinkNode, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.AndNode, ALF.Shared.Dto")
            return new AndNodeSerializer().serialize(entity as AndNode, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.OrNode, ALF.Shared.Dto")
            return new OrNodeSerializer().serialize(entity as OrNode, _forceTypeHint);

        throw new Error("Unable to serialize PopulationTreeNode, cannot infer type from " + entity.$type);
    }
}

export class AndNodeSerializer implements Serializer<AndNode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AndNode
    deserialize(data: any): AndNode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.children = (copy.children || []).map(new PopulationTreeNodeSerializer().deserialize);

        return new AndNode(copy);
    }

    serialize(entity: AndNode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AndNode, _forceTypeHint?: boolean): any
    serialize(entity: AndNode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            children: entity.children
                ? entity.children.map(e => new PopulationTreeNodeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            id: entity.id,
            projectedFromPopulationTreeNodeId: entity.projectedFromPopulationTreeNodeId,
            isSystemShipped: entity.isSystemShipped
        };
    }
}

export class BooleanOperationNodeSerializer implements Serializer<BooleanOperationNode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BooleanOperationNode
    deserialize(data: any): BooleanOperationNode | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.AndNode, ALF.Shared.Dto")
            return new AndNodeSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.OrNode, ALF.Shared.Dto")
            return new OrNodeSerializer().deserialize(data);

        throw new Error("Unable to deserialize BooleanOperationNode, cannot infer type from " + data.$type);
    }

    serialize(entity: BooleanOperationNode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BooleanOperationNode, _forceTypeHint?: boolean): any
    serialize(entity: BooleanOperationNode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.AndNode, ALF.Shared.Dto")
            return new AndNodeSerializer().serialize(entity as AndNode, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.OrNode, ALF.Shared.Dto")
            return new OrNodeSerializer().serialize(entity as OrNode, _forceTypeHint);

        throw new Error("Unable to serialize BooleanOperationNode, cannot infer type from " + entity.$type);
    }
}

export class OrNodeSerializer implements Serializer<OrNode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OrNode
    deserialize(data: any): OrNode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.children = (copy.children || []).map(new PopulationTreeNodeSerializer().deserialize);

        return new OrNode(copy);
    }

    serialize(entity: OrNode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OrNode, _forceTypeHint?: boolean): any
    serialize(entity: OrNode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            children: entity.children
                ? entity.children.map(e => new PopulationTreeNodeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            id: entity.id,
            projectedFromPopulationTreeNodeId: entity.projectedFromPopulationTreeNodeId,
            isSystemShipped: entity.isSystemShipped
        };
    }
}
