import { BreakdownSummarySerializer } from "./breakdown-summary.serializer";
import { DualValueSummarySerializer } from "./dual-value-summary.serializer";
import { SingleValueSummarySerializer } from "./single-value-summary.serializer";
import { BreakdownSummary } from "@alf/models/summary/breakdown-summary";
import { DualValueSummary } from "@alf/models/summary/dual-value-summary";
import { SingleValueSummary } from "@alf/models/summary/single-value-summary";
import { Serializer } from "@alf/core/models";
import { AnalyticSummary } from "@alf/models/summary/analytic-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AnalyticSummarySerializer implements Serializer<AnalyticSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AnalyticSummary
    deserialize(data: any): AnalyticSummary | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Summary.BreakdownSummary, ALF.Shared.Dto")
            return new BreakdownSummarySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Summary.DualValueSummary, ALF.Shared.Dto")
            return new DualValueSummarySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Summary.SingleValueSummary, ALF.Shared.Dto")
            return new SingleValueSummarySerializer().deserialize(data);

        throw new Error("Unable to deserialize AnalyticSummary, cannot infer type from " + data.$type);
    }

    serialize(entity: AnalyticSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AnalyticSummary, _forceTypeHint?: boolean): any
    serialize(entity: AnalyticSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Summary.BreakdownSummary, ALF.Shared.Dto")
            return new BreakdownSummarySerializer().serialize(entity as BreakdownSummary, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Summary.DualValueSummary, ALF.Shared.Dto")
            return new DualValueSummarySerializer().serialize(entity as DualValueSummary, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Summary.SingleValueSummary, ALF.Shared.Dto")
            return new SingleValueSummarySerializer().serialize(entity as SingleValueSummary, _forceTypeHint);

        throw new Error("Unable to serialize AnalyticSummary, cannot infer type from " + entity.$type);
    }
}
