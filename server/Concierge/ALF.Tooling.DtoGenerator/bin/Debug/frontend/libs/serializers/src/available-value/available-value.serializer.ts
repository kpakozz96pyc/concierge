import { Serializer } from "@alf/core/models";
import { AvailableValue } from "@alf/models/available-value/available-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AvailableValueSerializer implements Serializer<AvailableValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AvailableValue
    deserialize(data: any): AvailableValue | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AvailableValue(copy);
    }

    serialize(entity: AvailableValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AvailableValue, _forceTypeHint?: boolean): any
    serialize(entity: AvailableValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AvailableValue.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            description: entity.description,
            extendedInformation: entity.extendedInformation
        };
    }
}
