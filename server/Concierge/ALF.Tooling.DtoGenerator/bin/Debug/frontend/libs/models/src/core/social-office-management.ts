
import { SocialOfficeManagementType } from "./enums/social-office-management-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SocialOfficeManagementId = string;

export class SocialOfficeManagement {

    static $name = "SocialOfficeManagement";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.SocialOfficeManagement, ALF.Shared.Dto"

    id: SocialOfficeManagementId;
    companyId: string;
    code: number;
    name?: string;
    location?: string;
    address?: string;
    countryCode?: string;
    postalCode?: string;
    type: SocialOfficeManagementType;

    constructor(data?: Partial<SocialOfficeManagement>) {
        Object.assign(this, data);
    }
}
