import { Serializer } from "@alf/core/models";
import { PopulationLinkNode } from "@alf/models/tree-structure/population-link-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationLinkNodeSerializer implements Serializer<PopulationLinkNode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PopulationLinkNode
    deserialize(data: any): PopulationLinkNode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PopulationLinkNode(copy);
    }

    serialize(entity: PopulationLinkNode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PopulationLinkNode, _forceTypeHint?: boolean): any
    serialize(entity: PopulationLinkNode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            populationId: entity.populationId,
            id: entity.id,
            projectedFromPopulationTreeNodeId: entity.projectedFromPopulationTreeNodeId,
            isSystemShipped: entity.isSystemShipped
        };
    }
}
