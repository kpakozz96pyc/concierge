import { Serializer } from "@alf/core/models";
import { TableFieldParameter } from "@alf/models/parameter-types/table-field-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TableFieldParameterSerializer implements Serializer<TableFieldParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TableFieldParameter
    deserialize(data: any): TableFieldParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TableFieldParameter(copy);
    }

    serialize(entity: TableFieldParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TableFieldParameter, _forceTypeHint?: boolean): any
    serialize(entity: TableFieldParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            tableNumber: entity.tableNumber,
            value: entity.value,
            overriddenValue: entity.overriddenValue
        };
    }
}
