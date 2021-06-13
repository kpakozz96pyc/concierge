
import { TaxInformationPartChanges } from "./tax-information-part-changes";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationPatchContainer {

    static $name = "TaxInformationPatchContainer";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.TaxInformationPatchContainer, ALF.Shared.Dto"

    taxInformation?: any;
    parts?: TaxInformationPartChanges;

    constructor(data?: Partial<TaxInformationPatchContainer>) {
        Object.assign(this, data);
    }
}
