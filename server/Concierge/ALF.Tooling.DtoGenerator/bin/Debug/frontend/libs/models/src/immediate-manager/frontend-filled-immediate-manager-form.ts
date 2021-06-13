
import { ImmediateManagerContactInformation } from "./immediate-manager-contact-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FrontendFilledImmediateManagerForm {

    static $name = "FrontendFilledImmediateManagerForm";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.ImmediateManager.FrontendFilledImmediateManagerForm, ALF.Shared.Dto"

    employeeId?: string;
    employmentId?: string;
    immediateManagerContactInformation?: ImmediateManagerContactInformation;
    utbetalesLonn: boolean;

    constructor(data?: Partial<FrontendFilledImmediateManagerForm>) {
        Object.assign(this, data);
    }
}
