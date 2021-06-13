import { AssignType } from "@alf/models/data-access/enums/assign-type";
import { Serializer } from "@alf/core/models";
import { UserRoleAssign } from "@alf/models/data-access/user-role-assign";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UserRoleAssignSerializer implements Serializer<UserRoleAssign> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UserRoleAssign
    deserialize(data: any): UserRoleAssign | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.assignType = AssignType[copy.assignType];

        if (copy.validFrom !== undefined)
            copy.validFrom = new Date(copy.validFrom);

        if (copy.validTo !== undefined)
            copy.validTo = new Date(copy.validTo);

        return new UserRoleAssign(copy);
    }

    serialize(entity: UserRoleAssign | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UserRoleAssign, _forceTypeHint?: boolean): any
    serialize(entity: UserRoleAssign | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? UserRoleAssign.typeNameHint : undefined,
            id: entity.id,
            roleId: entity.roleId,
            userId: entity.userId,
            assignType: AssignType[entity.assignType],
            companyGroupId: entity.companyGroupId,
            companyId: entity.companyId,
            organizationCode: entity.organizationCode,
            employeeNumber: entity.employeeNumber,
            validFrom: entity.validFrom
                ? entity.validFrom.toISOString()
                : undefined,
            validTo: entity.validTo
                ? entity.validTo.toISOString()
                : undefined
        };
    }
}
