import { GraphInterval } from "@alf/models/analysis/enums/graph-interval";
import { Serializer } from "@alf/core/models";
import { SingleValueGraph } from "@alf/models/graph/single-value-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleValueGraphSerializer implements Serializer<SingleValueGraph> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SingleValueGraph
    deserialize(data: any): SingleValueGraph | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.interval = GraphInterval[copy.interval];

        return new SingleValueGraph(copy);
    }

    serialize(entity: SingleValueGraph | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SingleValueGraph, _forceTypeHint?: boolean): any
    serialize(entity: SingleValueGraph | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            values: entity.values,
            interval: GraphInterval[entity.interval],
            columnLabels: entity.columnLabels
        };
    }
}
