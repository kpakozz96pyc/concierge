

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionExtendedInformation {

    static $name = "ImportDefinitionExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.ImportDefinitionExtendedInformation, ALF.Shared.Dto"

    shortDescription?: string;
    longDescription?: string;
    hiddenInPayrollPortal: boolean;
    availableInCustomerPortal: boolean;

    constructor(data?: Partial<ImportDefinitionExtendedInformation>) {
        Object.assign(this, data);
    }
}
