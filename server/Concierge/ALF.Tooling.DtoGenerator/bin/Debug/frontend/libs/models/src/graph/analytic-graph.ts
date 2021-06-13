
import { GraphInterval } from "../analysis/enums/graph-interval";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AnalyticGraph {

    static $name = "AnalyticGraph";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Graph.AnalyticGraph, ALF.Shared.Dto"

    $type: string;
    interval: GraphInterval;
    columnLabels: string[] = [];

    constructor(data?: Partial<AnalyticGraph>) {
        Object.assign(this, data);
    }
}
