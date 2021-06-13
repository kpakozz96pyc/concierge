import { Serializer } from "@alf/core/models";
import { DatabaseTableContext } from "@alf/models/search-context/database-table-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DatabaseTableContextSerializer implements Serializer<DatabaseTableContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DatabaseTableContext
    deserialize(data: any): DatabaseTableContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DatabaseTableContext(copy);
    }

    serialize(entity: DatabaseTableContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DatabaseTableContext, _forceTypeHint?: boolean): any
    serialize(entity: DatabaseTableContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? DatabaseTableContext.typeNameHint : undefined,
            databaseTable: entity.databaseTable
        };
    }
}
