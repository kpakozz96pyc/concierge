import { Serializer } from "@alf/core/models";
import { WebApiSourceConfig } from "@alf/models/config/web-api-source-config";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WebApiSourceConfigSerializer implements Serializer<WebApiSourceConfig> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WebApiSourceConfig
    deserialize(data: any): WebApiSourceConfig | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WebApiSourceConfig(copy);
    }

    serialize(entity: WebApiSourceConfig | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WebApiSourceConfig, _forceTypeHint?: boolean): any
    serialize(entity: WebApiSourceConfig | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            authEndpointType: entity.authEndpointType,
            authUrl: entity.authUrl,
            clientId: entity.clientId,
            clientSecret: entity.clientSecret,
            clientCredentialStyle: entity.clientCredentialStyle,
            scope: entity.scope,
            endpointUrl: entity.endpointUrl,
            acrValues: entity.acrValues,
            bypassEndpointValidationCheck: entity.bypassEndpointValidationCheck
        };
    }
}
