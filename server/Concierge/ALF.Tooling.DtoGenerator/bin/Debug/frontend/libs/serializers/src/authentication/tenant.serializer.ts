import { Serializer } from "@alf/core/models";
import { Tenant } from "@alf/models/authentication/tenant";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TenantSerializer implements Serializer<Tenant> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Tenant
    deserialize(data: any): Tenant | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new Tenant(copy);
    }

    serialize(entity: Tenant | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Tenant, _forceTypeHint?: boolean): any
    serialize(entity: Tenant | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Tenant.typeNameHint : undefined,
            id: entity.id,
            name: entity.name,
            logo: entity.logo,
            description: entity.description,
            canAccessAdminApp: entity.canAccessAdminApp,
            canAccessCustomerApp: entity.canAccessCustomerApp,
            canAccessEmployeeApp: entity.canAccessEmployeeApp,
            canAccessManagerApp: entity.canAccessManagerApp,
            canAccessPayrollApp: entity.canAccessPayrollApp
        };
    }
}
