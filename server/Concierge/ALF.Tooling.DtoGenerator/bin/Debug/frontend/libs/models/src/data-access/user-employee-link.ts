

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type UserEmployeeLinkId = string;

export class UserEmployeeLink {

    static $name = "UserEmployeeLink";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.UserEmployeeLink, ALF.Shared.Dto"

    id: UserEmployeeLinkId;
    userId: string;
    companyId: string;
    employeeNumber: number;

    constructor(data?: Partial<UserEmployeeLink>) {
        Object.assign(this, data);
    }
}
