import { PopulationTreeNodeSerializer } from "../tree-structure/population-tree-node.serializer";
import { Serializer } from "@alf/core/models";
import { Population } from "@alf/models/populations/population";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationSerializer implements Serializer<Population> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Population
    deserialize(data: any): Population | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.rootNode = new PopulationTreeNodeSerializer().deserialize(copy.rootNode);

        return new Population(copy);
    }

    serialize(entity: Population | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Population, _forceTypeHint?: boolean): any
    serialize(entity: Population | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Population.typeNameHint : undefined,
            id: entity.id,
            description: entity.description,
            populationType: entity.populationType,
            rootNode: new PopulationTreeNodeSerializer().serialize(entity.rootNode, _forceTypeHint),
            isSystemShipped: entity.isSystemShipped
        };
    }
}
