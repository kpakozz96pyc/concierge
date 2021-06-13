import { AppInsightsConfigurationSerializer } from "./app-insights-configuration.serializer";
import { Serializer } from "@alf/core/models";
import { TelemetryConfiguration } from "@alf/models/configuration/telemetry-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TelemetryConfigurationSerializer implements Serializer<TelemetryConfiguration> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TelemetryConfiguration
    deserialize(data: any): TelemetryConfiguration | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.appInsights = new AppInsightsConfigurationSerializer().deserialize(copy.appInsights);

        return new TelemetryConfiguration(copy);
    }

    serialize(entity: TelemetryConfiguration | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TelemetryConfiguration, _forceTypeHint?: boolean): any
    serialize(entity: TelemetryConfiguration | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TelemetryConfiguration.typeNameHint : undefined,
            appInsights: new AppInsightsConfigurationSerializer().serialize(entity.appInsights, _forceTypeHint)
        };
    }
}
