
import { AutoImportSourceType } from "../auto-import/enums/auto-import-source-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AutoImportSourceExtendedInformation {

    static $name = "AutoImportSourceExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.AutoImportSourceExtendedInformation, ALF.Shared.Dto"

    autoImportSourceType: AutoImportSourceType;

    constructor(data?: Partial<AutoImportSourceExtendedInformation>) {
        Object.assign(this, data);
    }
}
