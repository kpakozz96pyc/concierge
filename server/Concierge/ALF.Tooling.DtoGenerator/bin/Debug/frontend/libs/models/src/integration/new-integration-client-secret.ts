
import { IntegrationClientId } from "./integration-client";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewIntegrationClientSecret {

    static $name = "NewIntegrationClientSecret";
    static typeNameHint = "ALF.Shared.Dto.Models.Integration.NewIntegrationClientSecret, ALF.Shared.Dto"

    clientSecret?: string;
    client: IntegrationClientId;

    constructor(data?: Partial<NewIntegrationClientSecret>) {
        Object.assign(this, data);
    }
}
