import { ImportDefinitionType } from "@alf/models/import/enums/import-definition-type";
import { Serializer } from "@alf/core/models";
import { EmployeeExportDefinition } from "@alf/models/employee/employee-export-definition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExportDefinitionSerializer implements Serializer<EmployeeExportDefinition> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeExportDefinition
    deserialize(data: any): EmployeeExportDefinition | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.importExportType = ImportDefinitionType[copy.importExportType];

        return new EmployeeExportDefinition(copy);
    }

    serialize(entity: EmployeeExportDefinition | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeExportDefinition, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeExportDefinition | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeExportDefinition.typeNameHint : undefined,
            id: entity.id,
            description: entity.description,
            externalFormatType: entity.externalFormatType,
            dataType: entity.dataType,
            exportType: entity.exportType,
            importExportDefinitionCode: entity.importExportDefinitionCode,
            importExportType: ImportDefinitionType[entity.importExportType]
        };
    }
}
