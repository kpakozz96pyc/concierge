

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type RoleId = string;

export class Role {

    static $name = "Role";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Role, ALF.Shared.Dto"

    id: RoleId;
    isSystemShipped: boolean;
    name?: string;
    roleType?: string;
    isEnabled: boolean;

    constructor(data?: Partial<Role>) {
        Object.assign(this, data);
    }
}
