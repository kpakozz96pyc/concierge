import { Serializer } from "@alf/core/models";
import { EmployeeIntegrationDefinitionTypeContext } from "@alf/models/search-context/employee-integration-definition-type-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeIntegrationDefinitionTypeContextSerializer implements Serializer<EmployeeIntegrationDefinitionTypeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeIntegrationDefinitionTypeContext
    deserialize(data: any): EmployeeIntegrationDefinitionTypeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeIntegrationDefinitionTypeContext(copy);
    }

    serialize(entity: EmployeeIntegrationDefinitionTypeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeIntegrationDefinitionTypeContext, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeIntegrationDefinitionTypeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeIntegrationDefinitionTypeContext.typeNameHint : undefined,
            type: entity.type
        };
    }
}
