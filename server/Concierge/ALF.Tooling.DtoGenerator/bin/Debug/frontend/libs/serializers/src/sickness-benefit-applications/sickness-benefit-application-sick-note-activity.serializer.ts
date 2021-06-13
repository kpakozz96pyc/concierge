import { FullSicknessBenefitApplicationSickNoteActivitySerializer } from "./full-sickness-benefit-application-sick-note-activity.serializer";
import { PartialSicknessBenefitApplicationSickNoteActivitySerializer } from "./partial-sickness-benefit-application-sick-note-activity.serializer";
import { CorrectedPartialSicknessBenefitApplicationSickNoteActivitySerializer } from "./corrected-partial-sickness-benefit-application-sick-note-activity.serializer";
import { FullSicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/full-sickness-benefit-application-sick-note-activity";
import { PartialSicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/partial-sickness-benefit-application-sick-note-activity";
import { CorrectedPartialSicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/corrected-partial-sickness-benefit-application-sick-note-activity";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationSickNoteActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-sick-note-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationSickNoteActivitySerializer implements Serializer<SicknessBenefitApplicationSickNoteActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationSickNoteActivity
    deserialize(data: any): SicknessBenefitApplicationSickNoteActivity | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.FullSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto")
            return new FullSicknessBenefitApplicationSickNoteActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.PartialSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto")
            return new PartialSicknessBenefitApplicationSickNoteActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.CorrectedPartialSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto")
            return new CorrectedPartialSicknessBenefitApplicationSickNoteActivitySerializer().deserialize(data);

        throw new Error("Unable to deserialize SicknessBenefitApplicationSickNoteActivity, cannot infer type from " + data.$type);
    }

    serialize(entity: SicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationSickNoteActivity, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationSickNoteActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.FullSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto")
            return new FullSicknessBenefitApplicationSickNoteActivitySerializer().serialize(entity as FullSicknessBenefitApplicationSickNoteActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.PartialSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto")
            return new PartialSicknessBenefitApplicationSickNoteActivitySerializer().serialize(entity as PartialSicknessBenefitApplicationSickNoteActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.CorrectedPartialSicknessBenefitApplicationSickNoteActivity, ALF.Shared.Dto")
            return new CorrectedPartialSicknessBenefitApplicationSickNoteActivitySerializer().serialize(entity as CorrectedPartialSicknessBenefitApplicationSickNoteActivity, _forceTypeHint);

        throw new Error("Unable to serialize SicknessBenefitApplicationSickNoteActivity, cannot infer type from " + entity.$type);
    }
}
