import { Serializer } from "@alf/core/models";
import { NewIntegrationClientSecret } from "@alf/models/integration/new-integration-client-secret";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewIntegrationClientSecretSerializer implements Serializer<NewIntegrationClientSecret> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewIntegrationClientSecret
    deserialize(data: any): NewIntegrationClientSecret | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new NewIntegrationClientSecret(copy);
    }

    serialize(entity: NewIntegrationClientSecret | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewIntegrationClientSecret, _forceTypeHint?: boolean): any
    serialize(entity: NewIntegrationClientSecret | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewIntegrationClientSecret.typeNameHint : undefined,
            clientSecret: entity.clientSecret,
            client: entity.client
        };
    }
}
