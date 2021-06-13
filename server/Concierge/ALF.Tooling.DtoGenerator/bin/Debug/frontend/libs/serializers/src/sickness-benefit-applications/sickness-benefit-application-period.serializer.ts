import { SicknessBenefitApplicationPeriodApplicationSerializer } from "./sickness-benefit-application-period-application.serializer";
import { SicknessBenefitApplicationPeriodOtherAbsenceSerializer } from "./sickness-benefit-application-period-other-absence.serializer";
import { SicknessBenefitApplicationPeriodSelfSickNoteSerializer } from "./sickness-benefit-application-period-self-sick-note.serializer";
import { SicknessBenefitApplicationPeriodSickNoteSerializer } from "./sickness-benefit-application-period-sick-note.serializer";
import { SicknessBenefitApplicationPeriodApplication } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-application";
import { SicknessBenefitApplicationPeriodOtherAbsence } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-other-absence";
import { SicknessBenefitApplicationPeriodSelfSickNote } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-self-sick-note";
import { SicknessBenefitApplicationPeriodSickNote } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-sick-note";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationPeriod } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodSerializer implements Serializer<SicknessBenefitApplicationPeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationPeriod
    deserialize(data: any): SicknessBenefitApplicationPeriod | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodApplication, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodApplicationSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodOtherAbsence, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodOtherAbsenceSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodSelfSickNote, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodSelfSickNoteSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodSickNote, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodSickNoteSerializer().deserialize(data);

        throw new Error("Unable to deserialize SicknessBenefitApplicationPeriod, cannot infer type from " + data.$type);
    }

    serialize(entity: SicknessBenefitApplicationPeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationPeriod, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationPeriod | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodApplication, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodApplicationSerializer().serialize(entity as SicknessBenefitApplicationPeriodApplication, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodOtherAbsence, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodOtherAbsenceSerializer().serialize(entity as SicknessBenefitApplicationPeriodOtherAbsence, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodSelfSickNote, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodSelfSickNoteSerializer().serialize(entity as SicknessBenefitApplicationPeriodSelfSickNote, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationPeriodSickNote, ALF.Shared.Dto")
            return new SicknessBenefitApplicationPeriodSickNoteSerializer().serialize(entity as SicknessBenefitApplicationPeriodSickNote, _forceTypeHint);

        throw new Error("Unable to serialize SicknessBenefitApplicationPeriod, cannot infer type from " + entity.$type);
    }
}
