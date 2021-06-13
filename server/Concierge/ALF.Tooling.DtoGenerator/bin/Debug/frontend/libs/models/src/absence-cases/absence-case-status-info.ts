
import { AbsenceCaseStatusSeverity } from "./enums/absence-case-status-severity";
import { AbsenceCaseStatusType } from "./enums/absence-case-status-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseStatusInfo {

    static $name = "AbsenceCaseStatusInfo";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCases.AbsenceCaseStatusInfo, ALF.Shared.Dto"

    id?: any;
    absenceCaseId?: any;
    entityId?: any;
    severity: AbsenceCaseStatusSeverity;
    type: AbsenceCaseStatusType;
    description?: string;
    referenceDate?: Date;

    constructor(data?: Partial<AbsenceCaseStatusInfo>) {
        Object.assign(this, data);
    }
}
