

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AbsenceCodeCopyParametersId = string;

export class AbsenceCodeCopyParameters {

    static $name = "AbsenceCodeCopyParameters";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCodeCopyParameters, ALF.Shared.Dto"

    copyFromId: AbsenceCodeCopyParametersId;
    copyToAbsenceCodeNumber: number;
    description?: string;

    constructor(data?: Partial<AbsenceCodeCopyParameters>) {
        Object.assign(this, data);
    }
}
