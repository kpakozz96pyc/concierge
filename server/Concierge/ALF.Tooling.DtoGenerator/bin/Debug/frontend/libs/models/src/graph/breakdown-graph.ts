
import { AnalyticGraph } from "@alf/models/graph/analytic-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BreakdownGraph extends AnalyticGraph {

    static $name = "BreakdownGraph";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Graph.BreakdownGraph, ALF.Shared.Dto"

    values: { [key: string]: number[] } = {};

    constructor(data?: Partial<BreakdownGraph>) {
        super(data);
        Object.assign(this, data);
        this.$type = BreakdownGraph.typeNameHint;
    }
}
