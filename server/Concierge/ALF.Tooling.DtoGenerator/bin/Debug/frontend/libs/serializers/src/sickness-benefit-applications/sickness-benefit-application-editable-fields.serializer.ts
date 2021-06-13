import { SicknessBenefitApplicationEducationSerializer } from "./sickness-benefit-application-education.serializer";
import { SicknessBenefitApplicationPeriodApplicationSerializer } from "./sickness-benefit-application-period-application.serializer";
import { SicknessBenefitApplicationOtherIncomeSourceSerializer } from "./sickness-benefit-application-other-income-source.serializer";
import { SicknessBenefitApplicationPeriodSelfSickNoteSerializer } from "./sickness-benefit-application-period-self-sick-note.serializer";
import { SicknessBenefitApplicationPeriodSickNoteSerializer } from "./sickness-benefit-application-period-sick-note.serializer";
import { SicknessBenefitApplicationPeriodOtherAbsenceSerializer } from "./sickness-benefit-application-period-other-absence.serializer";
import { SicknessBenefitApplicationSerializer } from "./sickness-benefit-application.serializer";
import { SicknessBenefitApplication } from "@alf/models/sickness-benefit-applications/sickness-benefit-application";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationEditableFields } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationEditableFieldsSerializer implements Serializer<SicknessBenefitApplicationEditableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationEditableFields
    deserialize(data: any): SicknessBenefitApplicationEditableFields | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplication, ALF.Shared.Dto")
            return new SicknessBenefitApplicationSerializer().deserialize(data);

        const copy = { ...data };
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

        return new SicknessBenefitApplicationEditableFields(copy);
    }

    serialize(entity: SicknessBenefitApplicationEditableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationEditableFields, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationEditableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplication, ALF.Shared.Dto")
            return new SicknessBenefitApplicationSerializer().serialize(entity as SicknessBenefitApplication, _forceTypeHint);

        return {
            $type: _forceTypeHint ? SicknessBenefitApplicationEditableFields.typeNameHint : undefined,
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
