

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type DeductionOwnerCopyParametersId = string;

export class DeductionOwnerCopyParameters {

    static $name = "DeductionOwnerCopyParameters";
    static typeNameHint = "ALF.Shared.Dto.Models.DeductionOwner.DeductionOwnerCopyParameters, ALF.Shared.Dto"

    copyFromId: DeductionOwnerCopyParametersId;
    copyToDeductionOwnerCode: number;
    description?: string;

    constructor(data?: Partial<DeductionOwnerCopyParameters>) {
        Object.assign(this, data);
    }
}
