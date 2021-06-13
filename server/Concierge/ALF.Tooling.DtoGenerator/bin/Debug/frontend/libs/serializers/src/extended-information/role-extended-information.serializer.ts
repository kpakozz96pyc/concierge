import { Serializer } from "@alf/core/models";
import { RoleExtendedInformation } from "@alf/models/extended-information/role-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RoleExtendedInformationSerializer implements Serializer<RoleExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RoleExtendedInformation
    deserialize(data: any): RoleExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RoleExtendedInformation(copy);
    }

    serialize(entity: RoleExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RoleExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: RoleExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RoleExtendedInformation.typeNameHint : undefined,
            isSystemShipped: entity.isSystemShipped,
            isEnabled: entity.isEnabled,
            roleType: entity.roleType
        };
    }
}
