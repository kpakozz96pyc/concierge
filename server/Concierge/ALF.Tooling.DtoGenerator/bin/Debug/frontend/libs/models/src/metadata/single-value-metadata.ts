
import { AnalyticMetadata } from "@alf/models/metadata/analytic-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleValueMetadata extends AnalyticMetadata {

    static $name = "SingleValueMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Metadata.SingleValueMetadata, ALF.Shared.Dto"

    label: string;

    constructor(data?: Partial<SingleValueMetadata>) {
        super(data);
        Object.assign(this, data);
        this.$type = SingleValueMetadata.typeNameHint;
    }
}
