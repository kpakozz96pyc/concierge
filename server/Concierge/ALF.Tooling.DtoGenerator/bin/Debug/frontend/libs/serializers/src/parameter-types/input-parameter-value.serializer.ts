import { BoolParameterSerializer } from "./bool-parameter.serializer";
import { FieldOperatorValueParameterSerializer } from "./field-operator-value-parameter.serializer";
import { FilterParameterSerializer } from "./filter-parameter.serializer";
import { NumberParameterSerializer } from "./number-parameter.serializer";
import { OperatorValueParameterSerializer } from "./operator-value-parameter.serializer";
import { TableFieldOperatorValueParameterSerializer } from "./table-field-operator-value-parameter.serializer";
import { TableFieldParameterSerializer } from "./table-field-parameter.serializer";
import { TextParameterSerializer } from "./text-parameter.serializer";
import { BoolParameter } from "@alf/models/parameter-types/bool-parameter";
import { FieldOperatorValueParameter } from "@alf/models/parameter-types/field-operator-value-parameter";
import { FilterParameter } from "@alf/models/parameter-types/filter-parameter";
import { NumberParameter } from "@alf/models/parameter-types/number-parameter";
import { OperatorValueParameter } from "@alf/models/parameter-types/operator-value-parameter";
import { TableFieldOperatorValueParameter } from "@alf/models/parameter-types/table-field-operator-value-parameter";
import { TableFieldParameter } from "@alf/models/parameter-types/table-field-parameter";
import { TextParameter } from "@alf/models/parameter-types/text-parameter";
import { Serializer } from "@alf/core/models";
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InputParameterValueSerializer implements Serializer<InputParameterValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InputParameterValue
    deserialize(data: any): InputParameterValue | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.BoolParameter, ALF.Shared.Dto")
            return new BoolParameterSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FieldOperatorValueParameter, ALF.Shared.Dto")
            return new FieldOperatorValueParameterSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FilterParameter, ALF.Shared.Dto")
            return new FilterParameterSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.NumberParameter, ALF.Shared.Dto")
            return new NumberParameterSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.OperatorValueParameter, ALF.Shared.Dto")
            return new OperatorValueParameterSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TableFieldOperatorValueParameter, ALF.Shared.Dto")
            return new TableFieldOperatorValueParameterSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TableFieldParameter, ALF.Shared.Dto")
            return new TableFieldParameterSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TextParameter, ALF.Shared.Dto")
            return new TextParameterSerializer().deserialize(data);

        throw new Error("Unable to deserialize InputParameterValue, cannot infer type from " + data.$type);
    }

    serialize(entity: InputParameterValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InputParameterValue, _forceTypeHint?: boolean): any
    serialize(entity: InputParameterValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.BoolParameter, ALF.Shared.Dto")
            return new BoolParameterSerializer().serialize(entity as BoolParameter, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FieldOperatorValueParameter, ALF.Shared.Dto")
            return new FieldOperatorValueParameterSerializer().serialize(entity as FieldOperatorValueParameter, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FilterParameter, ALF.Shared.Dto")
            return new FilterParameterSerializer().serialize(entity as FilterParameter, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.NumberParameter, ALF.Shared.Dto")
            return new NumberParameterSerializer().serialize(entity as NumberParameter, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.OperatorValueParameter, ALF.Shared.Dto")
            return new OperatorValueParameterSerializer().serialize(entity as OperatorValueParameter, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TableFieldOperatorValueParameter, ALF.Shared.Dto")
            return new TableFieldOperatorValueParameterSerializer().serialize(entity as TableFieldOperatorValueParameter, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TableFieldParameter, ALF.Shared.Dto")
            return new TableFieldParameterSerializer().serialize(entity as TableFieldParameter, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TextParameter, ALF.Shared.Dto")
            return new TextParameterSerializer().serialize(entity as TextParameter, _forceTypeHint);

        throw new Error("Unable to serialize InputParameterValue, cannot infer type from " + entity.$type);
    }
}
