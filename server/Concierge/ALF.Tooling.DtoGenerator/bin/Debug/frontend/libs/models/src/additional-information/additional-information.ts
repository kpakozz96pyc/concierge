
import { AdditionalInformationParameter } from "./additional-information-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AdditionalInformation {

    static $name = "AdditionalInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AdditionalInformation.AdditionalInformation, ALF.Shared.Dto"

    subType?: string;
    version: string;
    specifications: AdditionalInformationParameter[] = [];

    constructor(data?: Partial<AdditionalInformation>) {
        Object.assign(this, data);
    }
}
