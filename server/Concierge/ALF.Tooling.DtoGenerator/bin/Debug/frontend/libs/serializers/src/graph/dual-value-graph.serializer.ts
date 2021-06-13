import { GraphInterval } from "@alf/models/analysis/enums/graph-interval";
import { Serializer } from "@alf/core/models";
import { DualValueGraph } from "@alf/models/graph/dual-value-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DualValueGraphSerializer implements Serializer<DualValueGraph> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DualValueGraph
    deserialize(data: any): DualValueGraph | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.interval = GraphInterval[copy.interval];

        return new DualValueGraph(copy);
    }

    serialize(entity: DualValueGraph | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DualValueGraph, _forceTypeHint?: boolean): any
    serialize(entity: DualValueGraph | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            firstValues: entity.firstValues,
            secondValues: entity.secondValues,
            interval: GraphInterval[entity.interval],
            columnLabels: entity.columnLabels
        };
    }
}
