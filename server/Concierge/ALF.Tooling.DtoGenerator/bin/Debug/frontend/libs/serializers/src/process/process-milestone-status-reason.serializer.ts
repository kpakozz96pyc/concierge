import { ProcessMilestoneStatusReasonTimeSerializer } from "./process-milestone-status-reason-time.serializer";
import { ProcessMilestoneStatusReasonDependentSerializer } from "./process-milestone-status-reason-dependent.serializer";
import { ProcessMilestoneStatusReasonManualSerializer } from "./process-milestone-status-reason-manual.serializer";
import { ProcessMilestoneStatusReasonPlanStartSerializer } from "./process-milestone-status-reason-plan-start.serializer";
import { ProcessMilestoneStatusReasonActivationSerializer } from "./process-milestone-status-reason-activation.serializer";
import { ProcessMilestoneStatusReasonDeadlineSerializer } from "./process-milestone-status-reason-deadline.serializer";
import { ProcessMilestoneStatusReasonMilestonesSerializer } from "./process-milestone-status-reason-milestones.serializer";
import { ProcessMilestoneStatusReasonStepsSerializer } from "./process-milestone-status-reason-steps.serializer";
import { ProcessMilestoneStatusReasonPeriodStateSerializer } from "./process-milestone-status-reason-period-state.serializer";
import { ProcessMilestoneStatusReasonPeriodStatusSerializer } from "./process-milestone-status-reason-period-status.serializer";
import { ProcessMilestoneStatusReasonApprovalSerializer } from "./process-milestone-status-reason-approval.serializer";
import { ProcessMilestoneStatusReasonRejectedSerializer } from "./process-milestone-status-reason-rejected.serializer";
import { ProcessMilestoneStatusReasonIncompleteTaskSerializer } from "./process-milestone-status-reason-incomplete-task.serializer";
import { ProcessMilestoneStatusReasonFailedJobSerializer } from "./process-milestone-status-reason-failed-job.serializer";
import { ProcessMilestoneStatusReasonControlResultsSerializer } from "./process-milestone-status-reason-control-results.serializer";
import { ProcessMilestoneStatusReasonTime } from "@alf/models/process/process-milestone-status-reason-time";
import { ProcessMilestoneStatusReasonDependent } from "@alf/models/process/process-milestone-status-reason-dependent";
import { ProcessMilestoneStatusReasonManual } from "@alf/models/process/process-milestone-status-reason-manual";
import { ProcessMilestoneStatusReasonPlanStart } from "@alf/models/process/process-milestone-status-reason-plan-start";
import { ProcessMilestoneStatusReasonActivation } from "@alf/models/process/process-milestone-status-reason-activation";
import { ProcessMilestoneStatusReasonDeadline } from "@alf/models/process/process-milestone-status-reason-deadline";
import { ProcessMilestoneStatusReasonMilestones } from "@alf/models/process/process-milestone-status-reason-milestones";
import { ProcessMilestoneStatusReasonSteps } from "@alf/models/process/process-milestone-status-reason-steps";
import { ProcessMilestoneStatusReasonPeriodState } from "@alf/models/process/process-milestone-status-reason-period-state";
import { ProcessMilestoneStatusReasonPeriodStatus } from "@alf/models/process/process-milestone-status-reason-period-status";
import { ProcessMilestoneStatusReasonApproval } from "@alf/models/process/process-milestone-status-reason-approval";
import { ProcessMilestoneStatusReasonRejected } from "@alf/models/process/process-milestone-status-reason-rejected";
import { ProcessMilestoneStatusReasonIncompleteTask } from "@alf/models/process/process-milestone-status-reason-incomplete-task";
import { ProcessMilestoneStatusReasonFailedJob } from "@alf/models/process/process-milestone-status-reason-failed-job";
import { ProcessMilestoneStatusReasonControlResults } from "@alf/models/process/process-milestone-status-reason-control-results";
import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReason } from "@alf/models/process/process-milestone-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonSerializer implements Serializer<ProcessMilestoneStatusReason> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReason
    deserialize(data: any): ProcessMilestoneStatusReason | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonTime, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonTimeSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDependent, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonDependentSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonManual, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonManualSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPlanStart, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPlanStartSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonActivation, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonActivationSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDeadline, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonDeadlineSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonMilestones, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonMilestonesSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonSteps, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonStepsSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodState, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStateSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodStatus, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStatusSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonApproval, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonApprovalSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonRejected, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonRejectedSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonIncompleteTask, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonIncompleteTaskSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonFailedJob, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonFailedJobSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonControlResults, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonControlResultsSerializer().deserialize(data);

        throw new Error("Unable to deserialize ProcessMilestoneStatusReason, cannot infer type from " + data.$type);
    }

    serialize(entity: ProcessMilestoneStatusReason | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReason, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReason | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonTime, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonTimeSerializer().serialize(entity as ProcessMilestoneStatusReasonTime, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDependent, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonDependentSerializer().serialize(entity as ProcessMilestoneStatusReasonDependent, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonManual, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonManualSerializer().serialize(entity as ProcessMilestoneStatusReasonManual, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPlanStart, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPlanStartSerializer().serialize(entity as ProcessMilestoneStatusReasonPlanStart, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonActivation, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonActivationSerializer().serialize(entity as ProcessMilestoneStatusReasonActivation, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDeadline, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonDeadlineSerializer().serialize(entity as ProcessMilestoneStatusReasonDeadline, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonMilestones, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonMilestonesSerializer().serialize(entity as ProcessMilestoneStatusReasonMilestones, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonSteps, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonStepsSerializer().serialize(entity as ProcessMilestoneStatusReasonSteps, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodState, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStateSerializer().serialize(entity as ProcessMilestoneStatusReasonPeriodState, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPeriodStatus, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonPeriodStatusSerializer().serialize(entity as ProcessMilestoneStatusReasonPeriodStatus, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonApproval, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonApprovalSerializer().serialize(entity as ProcessMilestoneStatusReasonApproval, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonRejected, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonRejectedSerializer().serialize(entity as ProcessMilestoneStatusReasonRejected, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonIncompleteTask, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonIncompleteTaskSerializer().serialize(entity as ProcessMilestoneStatusReasonIncompleteTask, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonFailedJob, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonFailedJobSerializer().serialize(entity as ProcessMilestoneStatusReasonFailedJob, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonControlResults, ALF.Shared.Dto")
            return new ProcessMilestoneStatusReasonControlResultsSerializer().serialize(entity as ProcessMilestoneStatusReasonControlResults, _forceTypeHint);

        throw new Error("Unable to serialize ProcessMilestoneStatusReason, cannot infer type from " + entity.$type);
    }
}
