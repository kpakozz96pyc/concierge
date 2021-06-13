
import { AccessLevel } from "../access/enums/access-level";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessField {

    static $name = "ProcessField";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.ProcessField, ALF.Shared.Dto"

    processId?: string;
    tableNumber: number;
    fieldNumber: number;
    fieldMode: AccessLevel;
    isRequired: boolean;

    constructor(data?: Partial<ProcessField>) {
        Object.assign(this, data);
    }
}
