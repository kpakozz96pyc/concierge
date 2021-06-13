
import { BreakdownCategory } from "./breakdown-category";
import { AnalyticMetadata } from "@alf/models/metadata/analytic-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BreakdownMetadata extends AnalyticMetadata {

    static $name = "BreakdownMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Metadata.BreakdownMetadata, ALF.Shared.Dto"

    categories: BreakdownCategory[] = [];
    label: string;

    constructor(data?: Partial<BreakdownMetadata>) {
        super(data);
        Object.assign(this, data);
        this.$type = BreakdownMetadata.typeNameHint;
    }
}
