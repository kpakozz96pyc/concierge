import { Serializer } from "@alf/core/models";
import { UserEmployeeLink } from "@alf/models/data-access/user-employee-link";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UserEmployeeLinkSerializer implements Serializer<UserEmployeeLink> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UserEmployeeLink
    deserialize(data: any): UserEmployeeLink | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new UserEmployeeLink(copy);
    }

    serialize(entity: UserEmployeeLink | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UserEmployeeLink, _forceTypeHint?: boolean): any
    serialize(entity: UserEmployeeLink | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? UserEmployeeLink.typeNameHint : undefined,
            id: entity.id,
            userId: entity.userId,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber
        };
    }
}
