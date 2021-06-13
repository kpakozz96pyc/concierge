
import { AuthEndpointType } from "./enums/auth-endpoint-type";
import { ClientCredentialStyle } from "./enums/client-credential-style";
import { AutoImportSourceConfiguration } from "@alf/models/config/auto-import-source-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WebApiSourceConfig extends AutoImportSourceConfiguration {

    static $name = "WebApiSourceConfig";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.Config.WebApiSourceConfig, ALF.Shared.Dto"

    authEndpointType: AuthEndpointType;
    authUrl?: string;
    clientId?: string;
    clientSecret?: string;
    clientCredentialStyle: ClientCredentialStyle;
    scope?: string;
    endpointUrl?: string;
    acrValues?: string;
    bypassEndpointValidationCheck: boolean;

    constructor(data?: Partial<WebApiSourceConfig>) {
        super(data);
        Object.assign(this, data);
        this.$type = WebApiSourceConfig.typeNameHint;
    }
}
