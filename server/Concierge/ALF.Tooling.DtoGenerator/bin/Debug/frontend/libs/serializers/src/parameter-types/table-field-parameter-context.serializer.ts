import { Serializer } from "@alf/core/models";
import { TableFieldParameterContext } from "@alf/models/parameter-types/table-field-parameter-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TableFieldParameterContextSerializer implements Serializer<TableFieldParameterContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TableFieldParameterContext
    deserialize(data: any): TableFieldParameterContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TableFieldParameterContext(copy);
    }

    serialize(entity: TableFieldParameterContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TableFieldParameterContext, _forceTypeHint?: boolean): any
    serialize(entity: TableFieldParameterContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TableFieldParameterContext.typeNameHint : undefined,
            tableNumbers: entity.tableNumbers
        };
    }
}
