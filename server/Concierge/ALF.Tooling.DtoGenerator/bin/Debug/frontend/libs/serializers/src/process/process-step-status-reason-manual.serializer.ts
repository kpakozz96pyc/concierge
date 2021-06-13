import { ProcessStepStatusReasonIncompleteTaskSerializer } from "./process-step-status-reason-incomplete-task.serializer";
import { ProcessStepStatusReasonFailedJobSerializer } from "./process-step-status-reason-failed-job.serializer";
import { ProcessStepStatusReasonIncompleteJobSerializer } from "./process-step-status-reason-incomplete-job.serializer";
import { ProcessStepStatusReasonIncompleteTask } from "@alf/models/process/process-step-status-reason-incomplete-task";
import { ProcessStepStatusReasonFailedJob } from "@alf/models/process/process-step-status-reason-failed-job";
import { ProcessStepStatusReasonIncompleteJob } from "@alf/models/process/process-step-status-reason-incomplete-job";
import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonManual } from "@alf/models/process/process-step-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonManualSerializer implements Serializer<ProcessStepStatusReasonManual> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonManual
    deserialize(data: any): ProcessStepStatusReasonManual | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteTask, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteTaskSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonFailedJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonFailedJobSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteJobSerializer().deserialize(data);

        throw new Error("Unable to deserialize ProcessStepStatusReasonManual, cannot infer type from " + data.$type);
    }

    serialize(entity: ProcessStepStatusReasonManual | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonManual, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonManual | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteTask, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteTaskSerializer().serialize(entity as ProcessStepStatusReasonIncompleteTask, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonFailedJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonFailedJobSerializer().serialize(entity as ProcessStepStatusReasonFailedJob, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteJob, ALF.Shared.Dto")
            return new ProcessStepStatusReasonIncompleteJobSerializer().serialize(entity as ProcessStepStatusReasonIncompleteJob, _forceTypeHint);

        throw new Error("Unable to serialize ProcessStepStatusReasonManual, cannot infer type from " + entity.$type);
    }
}
