import { Serializer } from "@alf/core/models";
import { EmployeeIntegrationDefinitionColumn } from "@alf/models/integration/employee-integration-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeIntegrationDefinitionColumnSerializer implements Serializer<EmployeeIntegrationDefinitionColumn> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeIntegrationDefinitionColumn
    deserialize(data: any): EmployeeIntegrationDefinitionColumn | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeIntegrationDefinitionColumn(copy);
    }

    serialize(entity: EmployeeIntegrationDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeIntegrationDefinitionColumn, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeIntegrationDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeIntegrationDefinitionColumn.typeNameHint : undefined,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            reference: entity.reference,
            rank: entity.rank,
            value: entity.value,
            replacementId: entity.replacementId,
            targetEntity: entity.targetEntity
        };
    }
}
