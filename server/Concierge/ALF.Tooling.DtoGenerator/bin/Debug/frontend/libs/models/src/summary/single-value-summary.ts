
import { AnalyticSummary } from "@alf/models/summary/analytic-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleValueSummary extends AnalyticSummary {

    static $name = "SingleValueSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Summary.SingleValueSummary, ALF.Shared.Dto"

    value: number;

    constructor(data?: Partial<SingleValueSummary>) {
        super(data);
        Object.assign(this, data);
        this.$type = SingleValueSummary.typeNameHint;
    }
}
