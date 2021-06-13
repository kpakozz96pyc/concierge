

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TenantId = string;

export class Tenant {

    static $name = "Tenant";
    static typeNameHint = "ALF.Shared.Dto.Models.Authentication.Tenant, ALF.Shared.Dto"

    id: TenantId;
    name?: string;
    logo?: string;
    description?: string;
    canAccessAdminApp: boolean;
    canAccessCustomerApp: boolean;
    canAccessEmployeeApp: boolean;
    canAccessManagerApp: boolean;
    canAccessPayrollApp: boolean;

    constructor(data?: Partial<Tenant>) {
        Object.assign(this, data);
    }
}
