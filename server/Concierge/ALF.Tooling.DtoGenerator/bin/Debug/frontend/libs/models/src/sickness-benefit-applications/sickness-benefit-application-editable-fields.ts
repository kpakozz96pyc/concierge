
import { SicknessBenefitApplicationStatus } from "./enums/sickness-benefit-application-status";
import { SicknessBenefitApplicationResolveSickNoteError } from "./enums/sickness-benefit-application-resolve-sick-note-error";
import { SicknessBenefitApplicationResolveCorrectionsError } from "./enums/sickness-benefit-application-resolve-corrections-error";
import { SicknessBenefitApplicationEmployerAdvancesSalary } from "./enums/sickness-benefit-application-employer-advances-salary";
import { SicknessBenefitApplicationEducation } from "./sickness-benefit-application-education";
import { SicknessBenefitApplicationPeriodApplication } from "./sickness-benefit-application-period-application";
import { SicknessBenefitApplicationOtherIncomeSource } from "./sickness-benefit-application-other-income-source";
import { SicknessBenefitApplicationPeriodSelfSickNote } from "./sickness-benefit-application-period-self-sick-note";
import { SicknessBenefitApplicationPeriodSickNote } from "./sickness-benefit-application-period-sick-note";
import { SicknessBenefitApplicationPeriodOtherAbsence } from "./sickness-benefit-application-period-other-absence";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationEditableFields {

    static $name = "SicknessBenefitApplicationEditableFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationEditableFields, ALF.Shared.Dto"

    $type: string;
    navId: string;
    correctsNavId?: string;
    sickNoteNavId: string;
    correctsId?: any;
    correctedById?: any;
    sickNoteId?: any;
    absenceCaseId?: any;
    status: SicknessBenefitApplicationStatus;
    isAbandoned: boolean;
    ignoreCorrectsNotFound: boolean;
    waitingForJobId?: string;
    resolveSickNoteError?: SicknessBenefitApplicationResolveSickNoteError;
    resolveCorrectionsError?: SicknessBenefitApplicationResolveCorrectionsError;
    errorId?: string;
    errorMessage?: string;
    employeeId?: string;
    virksomhetsnummer: number;
    socialSecurityNumber?: string;
    employerAdvancesSalary?: SicknessBenefitApplicationEmployerAdvancesSalary;
    absenceFirstSickNoteDate: Date;
    sentToEmployerDate?: Date;
    sentToNavDate?: Date;
    sickNoteWrittenDate: Date;
    workResumedDate?: Date;
    hasConfirmedInfoDuty: boolean;
    hasConfirmedCorrectInfo: boolean;
    education?: SicknessBenefitApplicationEducation;
    otherIncomeSources: SicknessBenefitApplicationOtherIncomeSource[] = [];
    applicationPeriod?: SicknessBenefitApplicationPeriodApplication;
    selfSickNotePeriods: SicknessBenefitApplicationPeriodSelfSickNote[] = [];
    sickNotePeriods: SicknessBenefitApplicationPeriodSickNote[] = [];
    otherAbsencePeriods: SicknessBenefitApplicationPeriodOtherAbsence[] = [];

    constructor(data?: Partial<SicknessBenefitApplicationEditableFields>) {
        Object.assign(this, data);
    }
}
