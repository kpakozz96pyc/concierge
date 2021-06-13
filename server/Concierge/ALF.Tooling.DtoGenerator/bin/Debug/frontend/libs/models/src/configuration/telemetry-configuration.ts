
import { AppInsightsConfiguration } from "./app-insights-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TelemetryConfiguration {

    static $name = "TelemetryConfiguration";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.TelemetryConfiguration, ALF.Shared.Dto"

    appInsights: AppInsightsConfiguration;

    constructor(data?: Partial<TelemetryConfiguration>) {
        Object.assign(this, data);
    }
}
