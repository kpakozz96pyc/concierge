import { Serializer } from "@alf/core/models";
import { WageGroup } from "@alf/models/wage-groups/wage-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WageGroupSerializer implements Serializer<WageGroup> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WageGroup
    deserialize(data: any): WageGroup | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WageGroup(copy);
    }

    serialize(entity: WageGroup | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WageGroup, _forceTypeHint?: boolean): any
    serialize(entity: WageGroup | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WageGroup.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            description: entity.description,
            parentWageGroup: entity.parentWageGroup
        };
    }
}
