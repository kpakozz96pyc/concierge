
import { ImmediateManagerFormAutofilledFrom } from "./enums/immediate-manager-form-autofilled-from";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImmediateManagerContactInformation {

    static $name = "ImmediateManagerContactInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.ImmediateManager.ImmediateManagerContactInformation, ALF.Shared.Dto"

    employeeId?: string;
    autofilledFrom?: ImmediateManagerFormAutofilledFrom;
    socialSecurityNumber?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    phoneNumber?: string;

    constructor(data?: Partial<ImmediateManagerContactInformation>) {
        Object.assign(this, data);
    }
}
