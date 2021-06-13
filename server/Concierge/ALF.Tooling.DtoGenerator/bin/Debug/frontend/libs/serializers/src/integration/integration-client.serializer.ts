import { Serializer } from "@alf/core/models";
import { IntegrationClient } from "@alf/models/integration/integration-client";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IntegrationClientSerializer implements Serializer<IntegrationClient> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IntegrationClient
    deserialize(data: any): IntegrationClient | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new IntegrationClient(copy);
    }

    serialize(entity: IntegrationClient | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IntegrationClient, _forceTypeHint?: boolean): any
    serialize(entity: IntegrationClient | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IntegrationClient.typeNameHint : undefined,
            id: entity.id,
            name: entity.name,
            isEnabled: entity.isEnabled
        };
    }
}
