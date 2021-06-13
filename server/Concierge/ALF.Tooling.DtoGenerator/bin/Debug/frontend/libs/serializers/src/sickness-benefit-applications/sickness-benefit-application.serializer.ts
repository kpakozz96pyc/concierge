import { SicknessBenefitApplicationEducationSerializer } from "./sickness-benefit-application-education.serializer";
import { SicknessBenefitApplicationPeriodApplicationSerializer } from "./sickness-benefit-application-period-application.serializer";
import { SicknessBenefitApplicationOtherIncomeSourceSerializer } from "./sickness-benefit-application-other-income-source.serializer";
import { SicknessBenefitApplicationPeriodSelfSickNoteSerializer } from "./sickness-benefit-application-period-self-sick-note.serializer";
import { SicknessBenefitApplicationPeriodSickNoteSerializer } from "./sickness-benefit-application-period-sick-note.serializer";
import { SicknessBenefitApplicationPeriodOtherAbsenceSerializer } from "./sickness-benefit-application-period-other-absence.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplication } from "@alf/models/sickness-benefit-applications/sickness-benefit-application";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationSerializer implements Serializer<SicknessBenefitApplication> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplication
    deserialize(data: any): SicknessBenefitApplication | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.absenceFirstSickNoteDate = new Date(copy.absenceFirstSickNoteDate);

        if (copy.sentToEmployerDate !== undefined)
            copy.sentToEmployerDate = new Date(copy.sentToEmployerDate);

        if (copy.sentToNavDate !== undefined)
            copy.sentToNavDate = new Date(copy.sentToNavDate);

        copy.sickNoteWrittenDate = new Date(copy.sickNoteWrittenDate);

        if (copy.workResumedDate !== undefined)
            copy.workResumedDate = new Date(copy.workResumedDate);

        copy.education = new SicknessBenefitApplicationEducationSerializer().deserialize(copy.education);

        copy.otherIncomeSources = (copy.otherIncomeSources || []).map(new SicknessBenefitApplicationOtherIncomeSourceSerializer().deserialize);

        copy.applicationPeriod = new SicknessBenefitApplicationPeriodApplicationSerializer().deserialize(copy.applicationPeriod);

        copy.selfSickNotePeriods = (copy.selfSickNotePeriods || []).map(new SicknessBenefitApplicationPeriodSelfSickNoteSerializer().deserialize);

        copy.sickNotePeriods = (copy.sickNotePeriods || []).map(new SicknessBenefitApplicationPeriodSickNoteSerializer().deserialize);

        copy.otherAbsencePeriods = (copy.otherAbsencePeriods || []).map(new SicknessBenefitApplicationPeriodOtherAbsenceSerializer().deserialize);

        return new SicknessBenefitApplication(copy);
    }

    serialize(entity: SicknessBenefitApplication | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplication, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplication | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            id: entity.id,
            messageId: entity.messageId,
            companyId: entity.companyId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            createdByUserId: entity.createdByUserId,
            createdByUsername: entity.createdByUsername,
            mode: entity.mode,
            isActive: entity.isActive,
            isProcessing: entity.isProcessing,
            hasError: entity.hasError,
            isCorrected: entity.isCorrected,
            hasBeenParsed: entity.hasBeenParsed,
            employeeIdOptions: entity.employeeIdOptions,
            employmentIds: entity.employmentIds,
            navId: entity.navId,
            correctsNavId: entity.correctsNavId,
            sickNoteNavId: entity.sickNoteNavId,
            correctsId: entity.correctsId,
            correctedById: entity.correctedById,
            sickNoteId: entity.sickNoteId,
            absenceCaseId: entity.absenceCaseId,
            status: entity.status,
            isAbandoned: entity.isAbandoned,
            ignoreCorrectsNotFound: entity.ignoreCorrectsNotFound,
            waitingForJobId: entity.waitingForJobId,
            resolveSickNoteError: entity.resolveSickNoteError,
            resolveCorrectionsError: entity.resolveCorrectionsError,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            employeeId: entity.employeeId,
            virksomhetsnummer: entity.virksomhetsnummer,
            socialSecurityNumber: entity.socialSecurityNumber,
            employerAdvancesSalary: entity.employerAdvancesSalary,
            absenceFirstSickNoteDate: serializeDate(entity.absenceFirstSickNoteDate),
            sentToEmployerDate: serializeDate(entity.sentToEmployerDate),
            sentToNavDate: serializeDate(entity.sentToNavDate),
            sickNoteWrittenDate: serializeDate(entity.sickNoteWrittenDate),
            workResumedDate: serializeDate(entity.workResumedDate),
            hasConfirmedInfoDuty: entity.hasConfirmedInfoDuty,
            hasConfirmedCorrectInfo: entity.hasConfirmedCorrectInfo,
            education: new SicknessBenefitApplicationEducationSerializer().serialize(entity.education, _forceTypeHint),
            otherIncomeSources: entity.otherIncomeSources
                ? entity.otherIncomeSources.map(e => new SicknessBenefitApplicationOtherIncomeSourceSerializer().serialize(e, _forceTypeHint))
                : undefined,
            applicationPeriod: new SicknessBenefitApplicationPeriodApplicationSerializer().serialize(entity.applicationPeriod, _forceTypeHint),
            selfSickNotePeriods: entity.selfSickNotePeriods
                ? entity.selfSickNotePeriods.map(e => new SicknessBenefitApplicationPeriodSelfSickNoteSerializer().serialize(e, _forceTypeHint))
                : undefined,
            sickNotePeriods: entity.sickNotePeriods
                ? entity.sickNotePeriods.map(e => new SicknessBenefitApplicationPeriodSickNoteSerializer().serialize(e, _forceTypeHint))
                : undefined,
            otherAbsencePeriods: entity.otherAbsencePeriods
                ? entity.otherAbsencePeriods.map(e => new SicknessBenefitApplicationPeriodOtherAbsenceSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
