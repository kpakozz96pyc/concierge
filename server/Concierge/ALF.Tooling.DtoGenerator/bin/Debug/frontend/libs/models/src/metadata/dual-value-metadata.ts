
import { AnalyticMetadata } from "@alf/models/metadata/analytic-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DualValueMetadata extends AnalyticMetadata {

    static $name = "DualValueMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.Metadata.DualValueMetadata, ALF.Shared.Dto"

    firstLabel: string;
    secondLabel: string;

    constructor(data?: Partial<DualValueMetadata>) {
        super(data);
        Object.assign(this, data);
        this.$type = DualValueMetadata.typeNameHint;
    }
}
