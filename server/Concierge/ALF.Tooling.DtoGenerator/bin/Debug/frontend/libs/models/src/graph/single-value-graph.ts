
import { AnalyticGraph } from "@alf/models/graph/analytic-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleValueGraph extends AnalyticGraph {

    static $name = "SingleValueGraph";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Graph.SingleValueGraph, ALF.Shared.Dto"

    values: number[] = [];

    constructor(data?: Partial<SingleValueGraph>) {
        super(data);
        Object.assign(this, data);
        this.$type = SingleValueGraph.typeNameHint;
    }
}
