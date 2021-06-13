import { ProcessStepStatusReasonDependentSerializer } from "./process-step-status-reason-dependent.serializer";
import { ProcessStepStatusReasonManualSerializer } from "./process-step-status-reason-manual.serializer";
import { ProcessStepStatusReasonMilestoneBlockedSerializer } from "./process-step-status-reason-milestone-blocked.serializer";
import { ProcessStepStatusReasonDependsOnMilestoneSerializer } from "./process-step-status-reason-depends-on-milestone.serializer";
import { ProcessStepStatusReasonDependsOnStepSerializer } from "./process-step-status-reason-depends-on-step.serializer";
import { ProcessStepStatusReasonIncompleteTaskSerializer } from "./process-step-status-reason-incomplete-task.serializer";
import { ProcessStepStatusReasonFailedJobSerializer } from "./process-step-status-reason-failed-job.serializer";
import { ProcessStepStatusReasonIncompleteJobSerializer } from "./process-step-status-reason-incomplete-job.serializer";
import { ProcessStepStatusReasonDependent } from "@alf/models/process/process-step-status-reason-dependent";
import { ProcessStepStatusReasonManual } from "@alf/models/process/process-step-status-reason-manual";
import { ProcessStepStatusReasonMilestoneBlocked } from "@alf/models/process/process-step-status-reason-milestone-blocked";
import { ProcessStepStatusReasonDependsOnMilestone } from "@alf/models/process/process-step-status-reason-depends-on-milestone";
import { ProcessStepStatusReasonDependsOnStep } from "@alf/models/process/process-step-status-reason-depends-on-step";
import { ProcessStepStatusReasonIncompleteTask } from "@alf/models/process/process-step-status-reason-incomplete-task";
import { ProcessStepStatusReasonFailedJob } from "@alf/models/process/process-step-status-reason-failed-job";
import { ProcessStepStatusReasonIncompleteJob } from "@alf/models/process/process-step-status-reason-incomplete-job";
import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReason } from "@alf/models/process/process-step-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonSerializer implements Serializer<ProcessStepStatusReason> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReason
    deserialize(data: any): ProcessStepStatusReason | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependent, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependentSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonManual, ALF.Shared.Dto")
            return new ProcessStepStatusReasonManualSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonMilestoneBlocked, ALF.Shared.Dto")
            return new ProcessStepStatusReasonMilestoneBlockedSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnMilestone, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnMilestoneSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnStep, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnStepSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteTask, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteTaskSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonFailedJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonFailedJobSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteJobSerializer().deserialize(data);

        throw new Error("Unable to deserialize ProcessStepStatusReason, cannot infer type from " + data.$type);
    }

    serialize(entity: ProcessStepStatusReason | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReason, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReason | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependent, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependentSerializer().serialize(entity as ProcessStepStatusReasonDependent, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonManual, ALF.Shared.Dto")
            return new ProcessStepStatusReasonManualSerializer().serialize(entity as ProcessStepStatusReasonManual, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonMilestoneBlocked, ALF.Shared.Dto")
            return new ProcessStepStatusReasonMilestoneBlockedSerializer().serialize(entity as ProcessStepStatusReasonMilestoneBlocked, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnMilestone, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnMilestoneSerializer().serialize(entity as ProcessStepStatusReasonDependsOnMilestone, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnStep, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnStepSerializer().serialize(entity as ProcessStepStatusReasonDependsOnStep, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteTask, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteTaskSerializer().serialize(entity as ProcessStepStatusReasonIncompleteTask, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonFailedJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonFailedJobSerializer().serialize(entity as ProcessStepStatusReasonFailedJob, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteJobSerializer().serialize(entity as ProcessStepStatusReasonIncompleteJob, _forceTypeHint);

        throw new Error("Unable to serialize ProcessStepStatusReason, cannot infer type from " + entity.$type);
    }
}
