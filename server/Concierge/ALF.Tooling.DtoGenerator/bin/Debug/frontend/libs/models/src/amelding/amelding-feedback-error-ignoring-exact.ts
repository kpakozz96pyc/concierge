
import { InternalEntity } from "./enums/internal-entity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingFeedbackErrorIgnoringExact {

    static $name = "AmeldingFeedbackErrorIgnoringExact";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AmeldingFeedbackErrorIgnoringExact, ALF.Shared.Dto"

    ameldingErrorId: string;
    internalEntity: InternalEntity;

    constructor(data?: Partial<AmeldingFeedbackErrorIgnoringExact>) {
        Object.assign(this, data);
    }
}
