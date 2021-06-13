
import { AnalyticSummary } from "@alf/models/summary/analytic-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DualValueSummary extends AnalyticSummary {

    static $name = "DualValueSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Summary.DualValueSummary, ALF.Shared.Dto"

    firstValue: number;
    secondValue: number;

    constructor(data?: Partial<DualValueSummary>) {
        super(data);
        Object.assign(this, data);
        this.$type = DualValueSummary.typeNameHint;
    }
}
