import { Serializer } from "@alf/core/models";
import { IntegrationImportDefinitionColumn } from "@alf/models/import/integration-import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IntegrationImportDefinitionColumnSerializer implements Serializer<IntegrationImportDefinitionColumn> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IntegrationImportDefinitionColumn
    deserialize(data: any): IntegrationImportDefinitionColumn | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new IntegrationImportDefinitionColumn(copy);
    }

    serialize(entity: IntegrationImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IntegrationImportDefinitionColumn, _forceTypeHint?: boolean): any
    serialize(entity: IntegrationImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            isGlobal: entity.isGlobal,
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
