
import { AdditionalInformationConfigParameter } from "./additional-information-config-parameter";
import { AdditionalInformationConfigSubType } from "./additional-information-config-sub-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AdditionalInformationConfigId = string;

export class AdditionalInformationConfig {

    static $name = "AdditionalInformationConfig";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AdditionalInformation.AdditionalInformationConfig, ALF.Shared.Dto"

    id: AdditionalInformationConfigId;
    code: string;
    description: string;
    parameters: AdditionalInformationConfigParameter[] = [];
    subTypes: AdditionalInformationConfigSubType[] = [];

    constructor(data?: Partial<AdditionalInformationConfig>) {
        Object.assign(this, data);
    }
}
