import { Serializer } from "@alf/core/models";
import { GrantGroup } from "@alf/models/data-access/grant-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GrantGroupSerializer implements Serializer<GrantGroup> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GrantGroup
    deserialize(data: any): GrantGroup | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GrantGroup(copy);
    }

    serialize(entity: GrantGroup | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GrantGroup, _forceTypeHint?: boolean): any
    serialize(entity: GrantGroup | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GrantGroup.typeNameHint : undefined,
            id: entity.id,
            isSystemShipped: entity.isSystemShipped,
            name: entity.name,
            isEnabled: entity.isEnabled
        };
    }
}
