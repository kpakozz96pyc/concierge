
import { AmeldingFeedbackErrorIgnoringExact } from "./amelding-feedback-error-ignoring-exact";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingFeedbackErrorIgnoringExactSet {

    static $name = "AmeldingFeedbackErrorIgnoringExactSet";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AmeldingFeedbackErrorIgnoringExactSet, ALF.Shared.Dto"

    companyId: string;
    year: number;
    month: number;
    ameldingId: string;
    ignorings: AmeldingFeedbackErrorIgnoringExact[] = [];

    constructor(data?: Partial<AmeldingFeedbackErrorIgnoringExactSet>) {
        Object.assign(this, data);
    }
}
