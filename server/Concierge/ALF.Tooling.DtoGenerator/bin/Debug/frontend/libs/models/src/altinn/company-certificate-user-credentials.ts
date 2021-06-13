

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyCertificateUserCredentials {

    static $name = "CompanyCertificateUserCredentials";
    static typeNameHint = "ALF.Shared.Dto.Models.Altinn.CompanyCertificateUserCredentials, ALF.Shared.Dto"

    $type: string;
    userUsername?: string;
    userPassword?: string;

    constructor(data?: Partial<CompanyCertificateUserCredentials>) {
        Object.assign(this, data);
    }
}
