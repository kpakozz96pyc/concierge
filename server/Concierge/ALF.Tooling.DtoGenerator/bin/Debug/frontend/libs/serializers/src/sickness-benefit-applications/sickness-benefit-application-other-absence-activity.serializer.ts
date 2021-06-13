import { SicknessBenefitApplicationVacationActivitySerializer } from "./sickness-benefit-application-vacation-activity.serializer";
import { SicknessBenefitApplicationLeaveActivitySerializer } from "./sickness-benefit-application-leave-activity.serializer";
import { SicknessBenefitApplicationStayAbroadActivitySerializer } from "./sickness-benefit-application-stay-abroad-activity.serializer";
import { SicknessBenefitApplicationVacationActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-vacation-activity";
import { SicknessBenefitApplicationLeaveActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-leave-activity";
import { SicknessBenefitApplicationStayAbroadActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-stay-abroad-activity";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationOtherAbsenceActivity } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-other-absence-activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationOtherAbsenceActivitySerializer implements Serializer<SicknessBenefitApplicationOtherAbsenceActivity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationOtherAbsenceActivity
    deserialize(data: any): SicknessBenefitApplicationOtherAbsenceActivity | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationVacationActivity, ALF.Shared.Dto")
            return new SicknessBenefitApplicationVacationActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationLeaveActivity, ALF.Shared.Dto")
            return new SicknessBenefitApplicationLeaveActivitySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationStayAbroadActivity, ALF.Shared.Dto")
            return new SicknessBenefitApplicationStayAbroadActivitySerializer().deserialize(data);

        throw new Error("Unable to deserialize SicknessBenefitApplicationOtherAbsenceActivity, cannot infer type from " + data.$type);
    }

    serialize(entity: SicknessBenefitApplicationOtherAbsenceActivity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationOtherAbsenceActivity, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationOtherAbsenceActivity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationVacationActivity, ALF.Shared.Dto")
            return new SicknessBenefitApplicationVacationActivitySerializer().serialize(entity as SicknessBenefitApplicationVacationActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationLeaveActivity, ALF.Shared.Dto")
            return new SicknessBenefitApplicationLeaveActivitySerializer().serialize(entity as SicknessBenefitApplicationLeaveActivity, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplicationStayAbroadActivity, ALF.Shared.Dto")
            return new SicknessBenefitApplicationStayAbroadActivitySerializer().serialize(entity as SicknessBenefitApplicationStayAbroadActivity, _forceTypeHint);

        throw new Error("Unable to serialize SicknessBenefitApplicationOtherAbsenceActivity, cannot infer type from " + entity.$type);
    }
}
