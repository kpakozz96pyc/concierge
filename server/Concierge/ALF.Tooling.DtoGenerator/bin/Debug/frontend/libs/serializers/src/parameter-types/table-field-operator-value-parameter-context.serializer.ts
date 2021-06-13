import { Serializer } from "@alf/core/models";
import { TableFieldOperatorValueParameterContext } from "@alf/models/parameter-types/table-field-operator-value-parameter-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TableFieldOperatorValueParameterContextSerializer implements Serializer<TableFieldOperatorValueParameterContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TableFieldOperatorValueParameterContext
    deserialize(data: any): TableFieldOperatorValueParameterContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TableFieldOperatorValueParameterContext(copy);
    }

    serialize(entity: TableFieldOperatorValueParameterContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TableFieldOperatorValueParameterContext, _forceTypeHint?: boolean): any
    serialize(entity: TableFieldOperatorValueParameterContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TableFieldOperatorValueParameterContext.typeNameHint : undefined,
            tableNumbers: entity.tableNumbers
        };
    }
}
