

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlDefinitionExtendedInformation {

    static $name = "ControlDefinitionExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.ControlDefinitionExtendedInformation, ALF.Shared.Dto"

    controlTypeId?: string;
    active: boolean;
    canOverrideActivationForCompany: boolean;
    isDeleted: boolean;
    systemShipped: boolean;

    constructor(data?: Partial<ControlDefinitionExtendedInformation>) {
        Object.assign(this, data);
    }
}
