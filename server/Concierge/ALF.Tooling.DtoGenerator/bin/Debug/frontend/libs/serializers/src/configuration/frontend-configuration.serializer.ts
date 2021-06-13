import { TelemetryConfigurationSerializer } from "./telemetry-configuration.serializer";
import { UrlConfigurationSerializer } from "./url-configuration.serializer";
import { Serializer } from "@alf/core/models";
import { FrontendConfiguration } from "@alf/models/configuration/frontend-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FrontendConfigurationSerializer implements Serializer<FrontendConfiguration> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FrontendConfiguration
    deserialize(data: any): FrontendConfiguration | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.telemetry = new TelemetryConfigurationSerializer().deserialize(copy.telemetry);

        copy.url = new UrlConfigurationSerializer().deserialize(copy.url);

        return new FrontendConfiguration(copy);
    }

    serialize(entity: FrontendConfiguration | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FrontendConfiguration, _forceTypeHint?: boolean): any
    serialize(entity: FrontendConfiguration | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FrontendConfiguration.typeNameHint : undefined,
            telemetry: new TelemetryConfigurationSerializer().serialize(entity.telemetry, _forceTypeHint),
            url: new UrlConfigurationSerializer().serialize(entity.url, _forceTypeHint)
        };
    }
}
