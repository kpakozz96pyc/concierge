

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type GrantGroupId = string;

export class GrantGroup {

    static $name = "GrantGroup";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.GrantGroup, ALF.Shared.Dto"

    id: GrantGroupId;
    isSystemShipped: boolean;
    name?: string;
    isEnabled: boolean;

    constructor(data?: Partial<GrantGroup>) {
        Object.assign(this, data);
    }
}
