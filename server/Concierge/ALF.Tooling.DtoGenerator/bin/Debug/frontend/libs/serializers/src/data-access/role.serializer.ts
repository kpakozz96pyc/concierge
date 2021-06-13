import { Serializer } from "@alf/core/models";
import { Role } from "@alf/models/data-access/role";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RoleSerializer implements Serializer<Role> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Role
    deserialize(data: any): Role | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new Role(copy);
    }

    serialize(entity: Role | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Role, _forceTypeHint?: boolean): any
    serialize(entity: Role | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Role.typeNameHint : undefined,
            id: entity.id,
            isSystemShipped: entity.isSystemShipped,
            name: entity.name,
            roleType: entity.roleType,
            isEnabled: entity.isEnabled
        };
    }
}
