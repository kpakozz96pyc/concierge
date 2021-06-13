import { Serializer } from "@alf/core/models";
import { FieldOperatorValueParameterContext } from "@alf/models/parameter-types/field-operator-value-parameter-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldOperatorValueParameterContextSerializer implements Serializer<FieldOperatorValueParameterContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldOperatorValueParameterContext
    deserialize(data: any): FieldOperatorValueParameterContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FieldOperatorValueParameterContext(copy);
    }

    serialize(entity: FieldOperatorValueParameterContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldOperatorValueParameterContext, _forceTypeHint?: boolean): any
    serialize(entity: FieldOperatorValueParameterContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldOperatorValueParameterContext.typeNameHint : undefined,
            tableNumber: entity.tableNumber
        };
    }
}
