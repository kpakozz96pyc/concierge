
import { PopulationType } from "../populations/enums/population-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationExtendedInformation {

    static $name = "PopulationExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.PopulationExtendedInformation, ALF.Shared.Dto"

    populationType: PopulationType;
    isSystemShipped: boolean;

    constructor(data?: Partial<PopulationExtendedInformation>) {
        Object.assign(this, data);
    }
}
