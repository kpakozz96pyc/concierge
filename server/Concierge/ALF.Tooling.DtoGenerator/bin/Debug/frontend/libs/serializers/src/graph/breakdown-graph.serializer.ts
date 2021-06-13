import { GraphInterval } from "@alf/models/analysis/enums/graph-interval";
import { Serializer } from "@alf/core/models";
import { BreakdownGraph } from "@alf/models/graph/breakdown-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BreakdownGraphSerializer implements Serializer<BreakdownGraph> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BreakdownGraph
    deserialize(data: any): BreakdownGraph | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.interval = GraphInterval[copy.interval];

        return new BreakdownGraph(copy);
    }

    serialize(entity: BreakdownGraph | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BreakdownGraph, _forceTypeHint?: boolean): any
    serialize(entity: BreakdownGraph | undefined, _forceTypeHint?: boolean): any | undefined {
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
