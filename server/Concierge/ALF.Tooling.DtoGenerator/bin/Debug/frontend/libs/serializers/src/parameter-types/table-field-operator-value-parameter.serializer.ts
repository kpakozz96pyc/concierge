import { Serializer } from "@alf/core/models";
import { TableFieldOperatorValueParameter } from "@alf/models/parameter-types/table-field-operator-value-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TableFieldOperatorValueParameterSerializer implements Serializer<TableFieldOperatorValueParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TableFieldOperatorValueParameter
    deserialize(data: any): TableFieldOperatorValueParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TableFieldOperatorValueParameter(copy);
    }

    serialize(entity: TableFieldOperatorValueParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TableFieldOperatorValueParameter, _forceTypeHint?: boolean): any
    serialize(entity: TableFieldOperatorValueParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            operator: entity.operator,
            value: entity.value,
            overriddenValue: entity.overriddenValue
        };
    }
}
