
import { ParameterType } from "../database-metadata/enums/parameter-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AdditionalInformationConfigParameter {

    static $name = "AdditionalInformationConfigParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AdditionalInformation.AdditionalInformationConfigParameter, ALF.Shared.Dto"

    parameterType: ParameterType;
    totalLength: number;
    decimalPlaces?: number;
    lookupKey: string;
    displayName: string;
    lookupId: string;
    canGetValueFromCar: boolean;

    constructor(data?: Partial<AdditionalInformationConfigParameter>) {
        Object.assign(this, data);
    }
}
