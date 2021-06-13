

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SocialOfficeId = string;

export class SocialOffice {

    static $name = "SocialOffice";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.SocialOffice, ALF.Shared.Dto"

    id: SocialOfficeId;
    companyId: string;
    code: number;
    name?: string;
    address?: string;
    postalAddress?: string;
    countryCode?: string;
    postalCode?: string;
    managementOffice?: number;
    municipalityCode?: number;
    validFrom?: Date;
    validTo?: Date;
    replacedWith?: number;
    phoneNumber?: string;
    contactInformation?: string;

    constructor(data?: Partial<SocialOffice>) {
        Object.assign(this, data);
    }
}
