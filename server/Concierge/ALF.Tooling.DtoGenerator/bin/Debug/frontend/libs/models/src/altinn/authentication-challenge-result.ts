

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AuthenticationChallengeResult {

    static $name = "AuthenticationChallengeResult";
    static typeNameHint = "ALF.Shared.Dto.Models.Altinn.AuthenticationChallengeResult, ALF.Shared.Dto"

    message?: string;
    validFrom: Date;
    validUntil: Date;

    constructor(data?: Partial<AuthenticationChallengeResult>) {
        Object.assign(this, data);
    }
}
