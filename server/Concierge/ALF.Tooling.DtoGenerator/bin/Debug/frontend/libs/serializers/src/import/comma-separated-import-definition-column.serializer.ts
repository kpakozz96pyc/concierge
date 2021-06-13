import { Serializer } from "@alf/core/models";
import { CommaSeparatedImportDefinitionColumn } from "@alf/models/import/comma-separated-import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CommaSeparatedImportDefinitionColumnSerializer implements Serializer<CommaSeparatedImportDefinitionColumn> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CommaSeparatedImportDefinitionColumn
    deserialize(data: any): CommaSeparatedImportDefinitionColumn | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CommaSeparatedImportDefinitionColumn(copy);
    }

    serialize(entity: CommaSeparatedImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CommaSeparatedImportDefinitionColumn, _forceTypeHint?: boolean): any
    serialize(entity: CommaSeparatedImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            explicitlyOverriddenColumnNumber: entity.explicitlyOverriddenColumnNumber,
            columnNumber: entity.columnNumber,
            fieldId: entity.fieldId,
            companyId: entity.companyId,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            rank: entity.rank,
            reference: entity.reference,
            value: entity.value,
            useFixedValue: entity.useFixedValue,
            replacementId: entity.replacementId,
            required: entity.required,
            dicLayout: entity.dicLayout,
            dataType: entity.dataType,
            numberOfDecimals: entity.numberOfDecimals,
            validation: entity.validation,
            concatenate: entity.concatenate,
            groupName: entity.groupName,
            showActualDate: entity.showActualDate,
            adjustForPositionPercent: entity.adjustForPositionPercent,
            cobolRule: entity.cobolRule,
            fieldMappingReference: entity.fieldMappingReference
        };
    }
}
