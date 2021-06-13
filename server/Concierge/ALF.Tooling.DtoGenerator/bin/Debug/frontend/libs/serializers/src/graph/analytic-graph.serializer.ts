import { BreakdownGraphSerializer } from "./breakdown-graph.serializer";
import { DualValueGraphSerializer } from "./dual-value-graph.serializer";
import { SingleValueGraphSerializer } from "./single-value-graph.serializer";
import { BreakdownGraph } from "@alf/models/graph/breakdown-graph";
import { DualValueGraph } from "@alf/models/graph/dual-value-graph";
import { SingleValueGraph } from "@alf/models/graph/single-value-graph";
import { Serializer } from "@alf/core/models";
import { AnalyticGraph } from "@alf/models/graph/analytic-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AnalyticGraphSerializer implements Serializer<AnalyticGraph> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AnalyticGraph
    deserialize(data: any): AnalyticGraph | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Graph.BreakdownGraph, ALF.Shared.Dto")
            return new BreakdownGraphSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Graph.DualValueGraph, ALF.Shared.Dto")
            return new DualValueGraphSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Graph.SingleValueGraph, ALF.Shared.Dto")
            return new SingleValueGraphSerializer().deserialize(data);

        throw new Error("Unable to deserialize AnalyticGraph, cannot infer type from " + data.$type);
    }

    serialize(entity: AnalyticGraph | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AnalyticGraph, _forceTypeHint?: boolean): any
    serialize(entity: AnalyticGraph | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Graph.BreakdownGraph, ALF.Shared.Dto")
            return new BreakdownGraphSerializer().serialize(entity as BreakdownGraph, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Graph.DualValueGraph, ALF.Shared.Dto")
            return new DualValueGraphSerializer().serialize(entity as DualValueGraph, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Graph.SingleValueGraph, ALF.Shared.Dto")
            return new SingleValueGraphSerializer().serialize(entity as SingleValueGraph, _forceTypeHint);

        throw new Error("Unable to serialize AnalyticGraph, cannot infer type from " + entity.$type);
    }
}
