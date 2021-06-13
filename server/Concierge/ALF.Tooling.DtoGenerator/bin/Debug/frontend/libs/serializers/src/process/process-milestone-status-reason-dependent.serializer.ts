import { ProcessMilestoneStatusReasonMilestonesSerializer } from "./process-milestone-status-reason-milestones.serializer";
import { ProcessMilestoneStatusReasonStepsSerializer } from "./process-milestone-status-reason-steps.serializer";
import { ProcessMilestoneStatusReasonPeriodStateSerializer } from "./process-milestone-status-reason-period-state.serializer";
import { ProcessMilestoneStatusReasonPeriodStatusSerializer } from "./process-milestone-status-reason-period-status.serializer";
import { ProcessMilestoneStatusReasonMilestones } from "@alf/models/process/process-milestone-status-reason-milestones";
import { ProcessMilestoneStatusReasonSteps } from "@alf/models/process/process-milestone-status-reason-steps";
import { ProcessMilestoneStatusReasonPeriodState } from "@alf/models/process/process-milestone-status-reason-period-state";
import { ProcessMilestoneStatusReasonPeriodStatus } from "@alf/models/process/process-milestone-status-reason-period-status";
import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonDependent } from "@alf/models/process/process-milestone-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonDependentSerializer implements Serializer<ProcessMilestoneStatusReasonDependent> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonDependent
    deserialize(data: any): ProcessMilestoneStatusReasonDependent | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonMilestones, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonMilestonesSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonSteps, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonStepsSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodState, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStateSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodStatus, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStatusSerializer().deserialize(data);

        throw new Error("Unable to deserialize ProcessMilestoneStatusReasonDependent, cannot infer type from " + data.$type);
    }

    serialize(entity: ProcessMilestoneStatusReasonDependent | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonDependent, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonDependent | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonMilestones, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonMilestonesSerializer().serialize(entity as ProcessMilestoneStatusReasonMilestones, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonSteps, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonStepsSerializer().serialize(entity as ProcessMilestoneStatusReasonSteps, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodState, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStateSerializer().serialize(entity as ProcessMilestoneStatusReasonPeriodState, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodStatus, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStatusSerializer().serialize(entity as ProcessMilestoneStatusReasonPeriodStatus, _forceTypeHint);

        throw new Error("Unable to serialize ProcessMilestoneStatusReasonDependent, cannot infer type from " + entity.$type);
    }
}
