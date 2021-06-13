
import { AssignType } from "./enums/assign-type";
import { UserRoleAssignId } from "./user-role-assign";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ActualUserRoleAssignId = string;

export class ActualUserRoleAssign {

    static $name = "ActualUserRoleAssign";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.ActualUserRoleAssign, ALF.Shared.Dto"

    id: ActualUserRoleAssignId;
    userRoleAssign?: UserRoleAssignId;
    roleId: string;
    userId: string;
    assignType: AssignType;
    companyGroupId?: string;
    companyId?: string;
    organizationCode?: string;
    employeeNumber?: number;
    validFrom?: Date;
    validTo?: Date;

    constructor(data?: Partial<ActualUserRoleAssign>) {
        Object.assign(this, data);
    }
}
