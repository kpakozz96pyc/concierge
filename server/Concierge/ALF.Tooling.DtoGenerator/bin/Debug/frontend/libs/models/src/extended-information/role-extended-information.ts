

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RoleExtendedInformation {

    static $name = "RoleExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.RoleExtendedInformation, ALF.Shared.Dto"

    isSystemShipped: boolean;
    isEnabled: boolean;
    roleType?: string;

    constructor(data?: Partial<RoleExtendedInformation>) {
        Object.assign(this, data);
    }
}
