import { Serializer } from "@alf/core/models";
import { FixedWidthImportDefinitionColumn } from "@alf/models/import/fixed-width-import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FixedWidthImportDefinitionColumnSerializer implements Serializer<FixedWidthImportDefinitionColumn> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FixedWidthImportDefinitionColumn
    deserialize(data: any): FixedWidthImportDefinitionColumn | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FixedWidthImportDefinitionColumn(copy);
    }

    serialize(entity: FixedWidthImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FixedWidthImportDefinitionColumn, _forceTypeHint?: boolean): any
    serialize(entity: FixedWidthImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            fromCharacter: entity.fromCharacter,
            toCharacter: entity.toCharacter,
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
