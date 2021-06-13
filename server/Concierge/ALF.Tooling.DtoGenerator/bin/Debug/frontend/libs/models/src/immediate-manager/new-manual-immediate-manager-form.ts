
import { ImmediateManagerContactInformation } from "./immediate-manager-contact-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewManualImmediateManagerForm {

    static $name = "NewManualImmediateManagerForm";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.ImmediateManager.NewManualImmediateManagerForm, ALF.Shared.Dto"

    companyId: string;
    employmentId: string;
    referenceDate: Date;
    shouldBeAutofilled: boolean;
    immediateManagerContactInformation?: ImmediateManagerContactInformation;
    utbetalesLonn?: boolean;

    constructor(data?: Partial<NewManualImmediateManagerForm>) {
        Object.assign(this, data);
    }
}
