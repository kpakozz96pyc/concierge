
import { TelemetryConfiguration } from "./telemetry-configuration";
import { UrlConfiguration } from "./url-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FrontendConfiguration {

    static $name = "FrontendConfiguration";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.FrontendConfiguration, ALF.Shared.Dto"

    telemetry: TelemetryConfiguration;
    url: UrlConfiguration;

    constructor(data?: Partial<FrontendConfiguration>) {
        Object.assign(this, data);
    }
}
