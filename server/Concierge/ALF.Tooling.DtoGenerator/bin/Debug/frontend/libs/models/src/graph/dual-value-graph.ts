
import { AnalyticGraph } from "@alf/models/graph/analytic-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DualValueGraph extends AnalyticGraph {

    static $name = "DualValueGraph";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Graph.DualValueGraph, ALF.Shared.Dto"

    firstValues: number[] = [];
    secondValues: number[] = [];

    constructor(data?: Partial<DualValueGraph>) {
        super(data);
        Object.assign(this, data);
        this.$type = DualValueGraph.typeNameHint;
    }
}
