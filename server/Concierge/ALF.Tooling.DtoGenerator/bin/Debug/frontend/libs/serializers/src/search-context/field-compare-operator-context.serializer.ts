import { ParameterType } from "@alf/models/database-metadata/enums/parameter-type";
import { Serializer } from "@alf/core/models";
import { FieldCompareOperatorContext } from "@alf/models/search-context/field-compare-operator-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldCompareOperatorContextSerializer implements Serializer<FieldCompareOperatorContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldCompareOperatorContext
    deserialize(data: any): FieldCompareOperatorContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameterType = ParameterType[copy.parameterType];

        return new FieldCompareOperatorContext(copy);
    }

    serialize(entity: FieldCompareOperatorContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldCompareOperatorContext, _forceTypeHint?: boolean): any
    serialize(entity: FieldCompareOperatorContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldCompareOperatorContext.typeNameHint : undefined,
            parameterType: ParameterType[entity.parameterType]
        };
    }
}
