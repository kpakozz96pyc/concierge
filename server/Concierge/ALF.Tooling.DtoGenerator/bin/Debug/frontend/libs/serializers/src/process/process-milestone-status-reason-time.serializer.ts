import { ProcessMilestoneStatusReasonPlanStartSerializer } from "./process-milestone-status-reason-plan-start.serializer";
import { ProcessMilestoneStatusReasonActivationSerializer } from "./process-milestone-status-reason-activation.serializer";
import { ProcessMilestoneStatusReasonDeadlineSerializer } from "./process-milestone-status-reason-deadline.serializer";
import { ProcessMilestoneStatusReasonPlanStart } from "@alf/models/process/process-milestone-status-reason-plan-start";
import { ProcessMilestoneStatusReasonActivation } from "@alf/models/process/process-milestone-status-reason-activation";
import { ProcessMilestoneStatusReasonDeadline } from "@alf/models/process/process-milestone-status-reason-deadline";
import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonTime } from "@alf/models/process/process-milestone-status-reason-time";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonTimeSerializer implements Serializer<ProcessMilestoneStatusReasonTime> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonTime
    deserialize(data: any): ProcessMilestoneStatusReasonTime | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPlanStart, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPlanStartSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonActivation, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonActivationSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDeadline, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonDeadlineSerializer().deserialize(data);

        throw new Error("Unable to deserialize ProcessMilestoneStatusReasonTime, cannot infer type from " + data.$type);
    }

    serialize(entity: ProcessMilestoneStatusReasonTime | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonTime, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonTime | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPlanStart, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPlanStartSerializer().serialize(entity as ProcessMilestoneStatusReasonPlanStart, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonActivation, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonActivationSerializer().serialize(entity as ProcessMilestoneStatusReasonActivation, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDeadline, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonDeadlineSerializer().serialize(entity as ProcessMilestoneStatusReasonDeadline, _forceTypeHint);

        throw new Error("Unable to serialize ProcessMilestoneStatusReasonTime, cannot infer type from " + entity.$type);
    }
}
