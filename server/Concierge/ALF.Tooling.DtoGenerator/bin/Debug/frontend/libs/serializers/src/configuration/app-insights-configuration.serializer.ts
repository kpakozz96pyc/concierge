import { Serializer } from "@alf/core/models";
import { AppInsightsConfiguration } from "@alf/models/configuration/app-insights-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AppInsightsConfigurationSerializer implements Serializer<AppInsightsConfiguration> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AppInsightsConfiguration
    deserialize(data: any): AppInsightsConfiguration | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AppInsightsConfiguration(copy);
    }

    serialize(entity: AppInsightsConfiguration | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AppInsightsConfiguration, _forceTypeHint?: boolean): any
    serialize(entity: AppInsightsConfiguration | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AppInsightsConfiguration.typeNameHint : undefined,
            useAppInsights: entity.useAppInsights,
            instrumentationKey: entity.instrumentationKey
        };
    }
}
