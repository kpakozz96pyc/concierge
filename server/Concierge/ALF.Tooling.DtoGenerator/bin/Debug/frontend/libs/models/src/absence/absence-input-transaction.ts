
import { AbsenceInputTransactionRegistrationType } from "./enums/absence-input-transaction-registration-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AbsenceInputTransactionId = string;

export class AbsenceInputTransaction {

    static $name = "AbsenceInputTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceInputTransaction, ALF.Shared.Dto"

    id: AbsenceInputTransactionId;
    companyId: string;
    employeeId: string;
    changedAt: Date;
    employmentId: string;
    description?: string;
    registrationType: AbsenceInputTransactionRegistrationType;
    fromDate: Date;
    toDate?: Date;
    absenceCode: any;
    absenceGradePercent?: number;
    hours?: number;
    isAbandoned?: boolean;

    constructor(data?: Partial<AbsenceInputTransaction>) {
        Object.assign(this, data);
    }
}
