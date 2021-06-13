

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ForeignBankInformationId = string;

export class ForeignBankInformation {

    static $name = "ForeignBankInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.Banking.ForeignBankInformation, ALF.Shared.Dto"

    id: ForeignBankInformationId;
    companyId: string;
    bankCountryCode: string;
    code: string;
    name?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    feeCode?: string;
    useAddressInformation?: boolean;

    constructor(data?: Partial<ForeignBankInformation>) {
        Object.assign(this, data);
    }
}
