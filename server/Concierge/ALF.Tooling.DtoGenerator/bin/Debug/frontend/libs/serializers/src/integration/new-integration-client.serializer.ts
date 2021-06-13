import { Serializer } from "@alf/core/models";
import { NewIntegrationClient } from "@alf/models/integration/new-integration-client";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewIntegrationClientSerializer implements Serializer<NewIntegrationClient> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewIntegrationClient
    deserialize(data: any): NewIntegrationClient | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new NewIntegrationClient(copy);
    }

    serialize(entity: NewIntegrationClient | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewIntegrationClient, _forceTypeHint?: boolean): any
    serialize(entity: NewIntegrationClient | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewIntegrationClient.typeNameHint : undefined,
            name: entity.name
        };
    }
}
