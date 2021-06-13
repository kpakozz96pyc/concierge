

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AppInsightsConfiguration {

    static $name = "AppInsightsConfiguration";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.AppInsightsConfiguration, ALF.Shared.Dto"

    useAppInsights: boolean;
    instrumentationKey: string;

    constructor(data?: Partial<AppInsightsConfiguration>) {
        Object.assign(this, data);
    }
}
