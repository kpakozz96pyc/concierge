
import { AnalyticSummary } from "@alf/models/summary/analytic-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BreakdownSummary extends AnalyticSummary {

    static $name = "BreakdownSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Summary.BreakdownSummary, ALF.Shared.Dto"

    values: { [key: string]: number } = {};

    constructor(data?: Partial<BreakdownSummary>) {
        super(data);
        Object.assign(this, data);
        this.$type = BreakdownSummary.typeNameHint;
    }
}
