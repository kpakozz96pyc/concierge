
import { AbsenceCaseType } from "./enums/absence-case-type";
import { AbsenceCaseStatus } from "./enums/absence-case-status";
import { AbsenceCaseJobStatus } from "./enums/absence-case-job-status";
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { AbsenceCaseTransactionId } from "../transactions/absence-case-transaction";
import { AbsenceCaseEmploymentGroup } from "./absence-case-employment-group";
import { AbsenceCaseStatusInfo } from "./absence-case-status-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AbsenceCaseId = string;

export class AbsenceCase {

    static $name = "AbsenceCase";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCases.AbsenceCase, ALF.Shared.Dto"

    id: AbsenceCaseId;
    referenceNumber: number;
    waitingForJobId?: string;
    type: AbsenceCaseType;
    companyId?: string;
    virksomhetsnummer: number;
    employeeId?: string;
    status: AbsenceCaseStatus;
    startDate: Date;
    currentEndDate?: Date;
    expectedEndDate: Date;
    createdAt: Date;
    errorId?: string;
    errorMessage?: string;
    jobStatus: AbsenceCaseJobStatus;
    lastPossibleDateOfReimbursement?: Date;
    typeSpecificData?: any;
    employerAdvancesSalary?: boolean;
    mode: AltinnBackend;
    transactions: AbsenceCaseTransactionId[] = [];
    employmentGroups: AbsenceCaseEmploymentGroup[] = [];
    balance: number;
    isHolidayPay: boolean;
    isProcessing: boolean;
    isActive: boolean;
    hasError: boolean;
    statuses: AbsenceCaseStatusInfo[] = [];

    constructor(data?: Partial<AbsenceCase>) {
        Object.assign(this, data);
    }
}
