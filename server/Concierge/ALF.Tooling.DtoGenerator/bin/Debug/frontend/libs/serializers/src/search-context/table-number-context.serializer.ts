import { Serializer } from "@alf/core/models";
import { TableNumberContext } from "@alf/models/search-context/table-number-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TableNumberContextSerializer implements Serializer<TableNumberContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TableNumberContext
    deserialize(data: any): TableNumberContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TableNumberContext(copy);
    }

    serialize(entity: TableNumberContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TableNumberContext, _forceTypeHint?: boolean): any
    serialize(entity: TableNumberContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TableNumberContext.typeNameHint : undefined,
            tableNumberAliases: entity.tableNumberAliases
        };
    }
}
