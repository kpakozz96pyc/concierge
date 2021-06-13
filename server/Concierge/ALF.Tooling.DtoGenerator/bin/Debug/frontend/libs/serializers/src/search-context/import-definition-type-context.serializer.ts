import { ImportDefinitionType } from "@alf/models/import/enums/import-definition-type";
import { Serializer } from "@alf/core/models";
import { ImportDefinitionTypeContext } from "@alf/models/search-context/import-definition-type-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionTypeContextSerializer implements Serializer<ImportDefinitionTypeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportDefinitionTypeContext
    deserialize(data: any): ImportDefinitionTypeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = ImportDefinitionType[copy.type];

        return new ImportDefinitionTypeContext(copy);
    }

    serialize(entity: ImportDefinitionTypeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportDefinitionTypeContext, _forceTypeHint?: boolean): any
    serialize(entity: ImportDefinitionTypeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ImportDefinitionTypeContext.typeNameHint : undefined,
            type: ImportDefinitionType[entity.type]
        };
    }
}
