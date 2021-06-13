import { AssignType } from "@alf/models/data-access/enums/assign-type";
import { Serializer } from "@alf/core/models";
import { ActualUserRoleAssign } from "@alf/models/data-access/actual-user-role-assign";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ActualUserRoleAssignSerializer implements Serializer<ActualUserRoleAssign> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ActualUserRoleAssign
    deserialize(data: any): ActualUserRoleAssign | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.assignType = AssignType[copy.assignType];

        if (copy.validFrom !== undefined)
            copy.validFrom = new Date(copy.validFrom);

        if (copy.validTo !== undefined)
            copy.validTo = new Date(copy.validTo);

        return new ActualUserRoleAssign(copy);
    }

    serialize(entity: ActualUserRoleAssign | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ActualUserRoleAssign, _forceTypeHint?: boolean): any
    serialize(entity: ActualUserRoleAssign | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ActualUserRoleAssign.typeNameHint : undefined,
            id: entity.id,
            userRoleAssign: entity.userRoleAssign,
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
