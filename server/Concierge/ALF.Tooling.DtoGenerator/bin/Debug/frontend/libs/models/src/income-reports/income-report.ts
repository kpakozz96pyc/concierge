
import { IncomeReportSchemaVersion } from "./enums/income-report-schema-version";
import { IncomeReportStatus } from "./enums/income-report-status";
import { IncomeReportReason } from "./enums/income-report-reason";
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { IncomeReportSendError } from "./enums/income-report-send-error";
import { IncomeReportIncomeChangeReason } from "./enums/income-report-income-change-reason";
import { IncomeReportBenefitData } from "./income-report-benefit-data";
import { IncomeReportFillError } from "./income-report-fill-error";
import { IncomeReportFringeBenefitChange } from "./income-report-fringe-benefit-change";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type IncomeReportId = string;

export class IncomeReport {

    static $name = "IncomeReport";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReport, ALF.Shared.Dto"

    id: IncomeReportId;
    replacesIncomeReportId?: any;
    replacedByIncomeReportId?: any;
    absenceCaseId?: any;
    absenceCaseEmploymentGroupId?: any;
    schemaVersion: IncomeReportSchemaVersion;
    companyId?: string;
    employeeId?: string;
    status: IncomeReportStatus;
    createdByUserId?: string;
    createdByUsername?: string;
    createdAt: Date;
    isAbandoned: boolean;
    waitingForJobId?: string;
    isManuallyTouched: boolean;
    shouldBeAutofilled: boolean;
    isFillApproved?: boolean;
    fillErrors: IncomeReportFillError[] = [];
    sendError?: IncomeReportSendError;
    sendErrorMessage?: string;
    sentAt?: Date;
    archivedMessageId?: any;
    archiveReference?: string;
    errorId?: string;
    errorMessage?: string;
    reason: IncomeReportReason;
    socialSecurityNumber?: string;
    virksomhetsnummer: number;
    systemName?: string;
    systemVersion?: string;
    arbeidsforholdId?: string;
    mode: AltinnBackend;
    isActive: boolean;
    isProcessing: boolean;
    hasError: boolean;
    hasCloseRelation?: boolean;
    senderName?: string;
    senderPhoneNumber?: string;
    income?: number;
    incomeChangeReason?: IncomeReportIncomeChangeReason;
    reimbursementAmountPerMonth?: number;
    reimbursementEndDate?: Date;
    fringeBenefitChanges: IncomeReportFringeBenefitChange[] = [];
    benefitData: IncomeReportBenefitData;

    constructor(data?: Partial<IncomeReport>) {
        Object.assign(this, data);
    }
}
