

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PostalRegistryId = string;

export class PostalRegistry {

    static $name = "PostalRegistry";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.PostalRegistry, ALF.Shared.Dto"

    id: PostalRegistryId;
    companyId: string;
    displayId?: string;
    countryCode: string;
    postalCode: string;
    name?: string;
    municipalityCode?: number;

    constructor(data?: Partial<PostalRegistry>) {
        Object.assign(this, data);
    }
}
