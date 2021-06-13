
import { ControlTypeCategory } from "../control/enums/control-type-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlTypeExtendedInformation {

    static $name = "ControlTypeExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.ControlTypeExtendedInformation, ALF.Shared.Dto"

    isInstanceable: boolean;
    categories: ControlTypeCategory[] = [];

    constructor(data?: Partial<ControlTypeExtendedInformation>) {
        Object.assign(this, data);
    }
}
