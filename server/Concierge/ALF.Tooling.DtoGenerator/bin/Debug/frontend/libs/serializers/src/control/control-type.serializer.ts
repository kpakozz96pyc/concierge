import { ControlTypeCategory } from "@alf/models/control/enums/control-type-category";
import { InputParameterSerializer } from "../input-parameters/input-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { ControlType } from "@alf/models/control/control-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlTypeSerializer implements Serializer<ControlType> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlType
    deserialize(data: any): ControlType | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameters = (copy.parameters || []).map(new InputParameterSerializer().deserialize);

        copy.filters = (copy.filters || []).map(new InputParameterSerializer().deserialize);

        copy.categories = (copy.categories || []).map((item: any) => ControlTypeCategory[item]);

        return new ControlType(copy);
    }

    serialize(entity: ControlType | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlType, _forceTypeHint?: boolean): any
    serialize(entity: ControlType | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlType.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            name: entity.name,
            description: entity.description,
            isInstanceable: entity.isInstanceable,
            parameters: entity.parameters
                ? entity.parameters.map(e => new InputParameterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            filters: entity.filters
                ? entity.filters.map(e => new InputParameterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            categories: entity.categories
                ? entity.categories.map(item => ControlTypeCategory[item])
                : undefined
        };
    }
}
