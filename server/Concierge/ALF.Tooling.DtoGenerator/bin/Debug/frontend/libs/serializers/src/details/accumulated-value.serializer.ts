import { Serializer } from "@alf/core/models";
import { AccumulatedValue } from "@alf/models/details/accumulated-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccumulatedValueSerializer implements Serializer<AccumulatedValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AccumulatedValue
    deserialize(data: any): AccumulatedValue | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AccumulatedValue(copy);
    }

    serialize(entity: AccumulatedValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AccumulatedValue, _forceTypeHint?: boolean): any
    serialize(entity: AccumulatedValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AccumulatedValue.typeNameHint : undefined,
            code: entity.code,
            description: entity.description,
            value: entity.value
        };
    }
}
