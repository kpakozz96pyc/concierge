import { EmployeeIntegrationDefinitionColumnSerializer } from "./employee-integration-definition-column.serializer";
import { Serializer } from "@alf/core/models";
import { EmployeeIntegrationDefinition } from "@alf/models/integration/employee-integration-definition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeIntegrationDefinitionSerializer implements Serializer<EmployeeIntegrationDefinition> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeIntegrationDefinition
    deserialize(data: any): EmployeeIntegrationDefinition | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.columns = (copy.columns || []).map(new EmployeeIntegrationDefinitionColumnSerializer().deserialize);

        return new EmployeeIntegrationDefinition(copy);
    }

    serialize(entity: EmployeeIntegrationDefinition | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeIntegrationDefinition, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeIntegrationDefinition | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeIntegrationDefinition.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            description: entity.description,
            externalCompanyIdentifierRule: entity.externalCompanyIdentifierRule,
            externalEmployeeIdentifierRule: entity.externalEmployeeIdentifierRule,
            externalEmploymentIdentifierRule: entity.externalEmploymentIdentifierRule,
            externalPersonIdentifierRule: entity.externalPersonIdentifierRule,
            canGenerateEmployeeNumber: entity.canGenerateEmployeeNumber,
            columns: entity.columns
                ? entity.columns.map(e => new EmployeeIntegrationDefinitionColumnSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
