
import { Ownership } from "../core/enums/ownership";
import { PortalType } from "../core/enums/portal-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type UserAdministrationDetailsId = string;

export class UserAdministrationDetails {

    static $name = "UserAdministrationDetails";
    static typeNameHint = "ALF.Shared.Dto.Models.Account.UserAdministrationDetails, ALF.Shared.Dto"

    id: UserAdministrationDetailsId;
    portalOwnership: { [key in PortalType]?: Ownership } = {};

    constructor(data?: Partial<UserAdministrationDetails>) {
        Object.assign(this, data);
    }
}
