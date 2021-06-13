

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type IntegrationClientId = string;

export class IntegrationClient {

    static $name = "IntegrationClient";
    static typeNameHint = "ALF.Shared.Dto.Models.Integration.IntegrationClient, ALF.Shared.Dto"

    id: IntegrationClientId;
    name?: string;
    isEnabled: boolean;

    constructor(data?: Partial<IntegrationClient>) {
        Object.assign(this, data);
    }
}
