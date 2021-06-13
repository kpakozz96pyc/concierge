import { Serializer } from "@alf/core/models";
import { GraphValue } from "@alf/models/graph/graph-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GraphValueSerializer implements Serializer<GraphValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GraphValue
    deserialize(data: any): GraphValue | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GraphValue(copy);
    }

    serialize(entity: GraphValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GraphValue, _forceTypeHint?: boolean): any
    serialize(entity: GraphValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GraphValue.typeNameHint : undefined,
            label: entity.label
        };
    }
}
