
import { TaxInformationPart } from "./tax-information-part";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationPartChanges {

    static $name = "TaxInformationPartChanges";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.TaxInformationPartChanges, ALF.Shared.Dto"

    added: TaxInformationPart[] = [];
    modified: { [key: string]: any } = {};
    deleted: string[] = [];

    constructor(data?: Partial<TaxInformationPartChanges>) {
        Object.assign(this, data);
    }
}
