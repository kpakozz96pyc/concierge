import { Serializer } from "@alf/core/models";
import { EmployeeImport } from "@alf/models/import/employee-import";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportSerializer implements Serializer<EmployeeImport> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeImport
    deserialize(data: any): EmployeeImport | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.messageCallTimestamp !== undefined)
            copy.messageCallTimestamp = new Date(copy.messageCallTimestamp);

        if (copy.messagePayloadTimestamp !== undefined)
            copy.messagePayloadTimestamp = new Date(copy.messagePayloadTimestamp);

        if (copy.receiveTimestamp !== undefined)
            copy.receiveTimestamp = new Date(copy.receiveTimestamp);

        copy.changed = new Date(copy.changed);

        return new EmployeeImport(copy);
    }

    serialize(entity: EmployeeImport | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeImport, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeImport | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeImport.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            externalFormatType: entity.externalFormatType,
            source: entity.source,
            integrationPipelineId: entity.integrationPipelineId,
            messageCallTimestamp: entity.messageCallTimestamp
                ? entity.messageCallTimestamp.toISOString()
                : undefined,
            messagePayloadTimestamp: entity.messagePayloadTimestamp
                ? entity.messagePayloadTimestamp.toISOString()
                : undefined,
            messageCorrelationId: entity.messageCorrelationId,
            messageOriginCorrelationId: entity.messageOriginCorrelationId,
            messageConnectorCorrelationId: entity.messageConnectorCorrelationId,
            receiveTimestamp: entity.receiveTimestamp
                ? entity.receiveTimestamp.toISOString()
                : undefined,
            receiveCorrelationId: entity.receiveCorrelationId,
            importDefinitionId: entity.importDefinitionId,
            status: entity.status,
            waitingForJobId: entity.waitingForJobId,
            attempts: entity.attempts,
            changed: entity.changed
                ? entity.changed.toISOString()
                : undefined
        };
    }
}
