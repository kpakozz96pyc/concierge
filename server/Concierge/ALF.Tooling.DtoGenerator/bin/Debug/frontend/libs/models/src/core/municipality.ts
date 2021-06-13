

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MunicipalityId = string;

export class Municipality {

    static $name = "Municipality";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.Municipality, ALF.Shared.Dto"

    id: MunicipalityId;
    code: number;
    name?: string;
    address?: string;
    countryCode?: string;
    postalCode?: string;
    employersTaxZone?: number;
    taxationOffice?: string;
    accountNumber?: string;
    created?: Date;
    terminated?: Date;

    constructor(data?: Partial<Municipality>) {
        Object.assign(this, data);
    }
}
