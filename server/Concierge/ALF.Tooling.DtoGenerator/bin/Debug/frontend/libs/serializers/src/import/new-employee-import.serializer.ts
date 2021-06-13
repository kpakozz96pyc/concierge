import { Serializer } from "@alf/core/models";
import { NewEmployeeImport } from "@alf/models/import/new-employee-import";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewEmployeeImportSerializer implements Serializer<NewEmployeeImport> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewEmployeeImport
    deserialize(data: any): NewEmployeeImport | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new NewEmployeeImport(copy);
    }

    serialize(entity: NewEmployeeImport | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewEmployeeImport, _forceTypeHint?: boolean): any
    serialize(entity: NewEmployeeImport | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewEmployeeImport.typeNameHint : undefined,
            externalFormatType: entity.externalFormatType,
            importDefinitionId: entity.importDefinitionId,
            integrationPipelineId: entity.integrationPipelineId,
            comment: entity.comment
        };
    }
}
