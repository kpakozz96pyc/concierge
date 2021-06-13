

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingFeedbackErrorIgnoringMonth {

    static $name = "AmeldingFeedbackErrorIgnoringMonth";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AmeldingFeedbackErrorIgnoringMonth, ALF.Shared.Dto"

    id: string;
    ameldingId?: string;
    companyId: string;
    year: number;
    month: number;
    comment?: string;
    additionalInformation?: string;

    constructor(data?: Partial<AmeldingFeedbackErrorIgnoringMonth>) {
        Object.assign(this, data);
    }
}
