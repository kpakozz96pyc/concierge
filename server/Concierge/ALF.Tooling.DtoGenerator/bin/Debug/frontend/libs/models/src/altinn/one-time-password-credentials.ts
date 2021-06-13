
import { OneTimePasswordType } from "./enums/one-time-password-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OneTimePasswordCredentials {

    static $name = "OneTimePasswordCredentials";
    static typeNameHint = "ALF.Shared.Dto.Models.Altinn.OneTimePasswordCredentials, ALF.Shared.Dto"

    oneTimePassword?: string;
    type?: OneTimePasswordType;

    constructor(data?: Partial<OneTimePasswordCredentials>) {
        Object.assign(this, data);
    }
}
