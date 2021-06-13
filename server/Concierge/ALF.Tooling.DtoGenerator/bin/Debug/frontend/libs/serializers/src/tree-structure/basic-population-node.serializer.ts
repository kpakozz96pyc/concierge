import { Serializer } from "@alf/core/models";
import { BasicPopulationNode } from "@alf/models/tree-structure/basic-population-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BasicPopulationNodeSerializer implements Serializer<BasicPopulationNode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BasicPopulationNode
    deserialize(data: any): BasicPopulationNode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BasicPopulationNode(copy);
    }

    serialize(entity: BasicPopulationNode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BasicPopulationNode, _forceTypeHint?: boolean): any
    serialize(entity: BasicPopulationNode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            basicPopulationType: entity.basicPopulationType,
            parameters: entity.parameters,
            negateExpression: entity.negateExpression,
            id: entity.id,
            projectedFromPopulationTreeNodeId: entity.projectedFromPopulationTreeNodeId,
            isSystemShipped: entity.isSystemShipped
        };
    }
}
