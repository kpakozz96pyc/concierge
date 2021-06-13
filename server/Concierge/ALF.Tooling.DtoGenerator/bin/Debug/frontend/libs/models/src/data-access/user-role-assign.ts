
import { AssignType } from "./enums/assign-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type UserRoleAssignId = string;

export class UserRoleAssign {

    static $name = "UserRoleAssign";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.UserRoleAssign, ALF.Shared.Dto"

    id: UserRoleAssignId;
    roleId: string;
    userId: string;
    assignType: AssignType;
    companyGroupId?: string;
    companyId?: string;
    organizationCode?: string;
    employeeNumber?: number;
    validFrom?: Date;
    validTo?: Date;

    constructor(data?: Partial<UserRoleAssign>) {
        Object.assign(this, data);
    }
}
