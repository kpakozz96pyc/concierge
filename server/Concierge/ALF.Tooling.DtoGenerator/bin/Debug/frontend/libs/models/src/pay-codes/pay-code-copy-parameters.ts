

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PayCodeCopyParametersId = string;

export class PayCodeCopyParameters {

    static $name = "PayCodeCopyParameters";
    static typeNameHint = "ALF.Shared.Dto.Models.PayCodes.PayCodeCopyParameters, ALF.Shared.Dto"

    copyFromId: PayCodeCopyParametersId;
    copyToPayCodeNumber: number;
    description?: string;

    constructor(data?: Partial<PayCodeCopyParameters>) {
        Object.assign(this, data);
    }
}
