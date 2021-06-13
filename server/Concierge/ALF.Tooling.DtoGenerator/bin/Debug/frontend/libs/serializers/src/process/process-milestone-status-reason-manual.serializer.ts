import { ProcessMilestoneStatusReasonApprovalSerializer } from "./process-milestone-status-reason-approval.serializer";
import { ProcessMilestoneStatusReasonRejectedSerializer } from "./process-milestone-status-reason-rejected.serializer";
import { ProcessMilestoneStatusReasonIncompleteTaskSerializer } from "./process-milestone-status-reason-incomplete-task.serializer";
import { ProcessMilestoneStatusReasonFailedJobSerializer } from "./process-milestone-status-reason-failed-job.serializer";
import { ProcessMilestoneStatusReasonControlResultsSerializer } from "./process-milestone-status-reason-control-results.serializer";
import { ProcessMilestoneStatusReasonApproval } from "@alf/models/process/process-milestone-status-reason-approval";
import { ProcessMilestoneStatusReasonRejected } from "@alf/models/process/process-milestone-status-reason-rejected";
import { ProcessMilestoneStatusReasonIncompleteTask } from "@alf/models/process/process-milestone-status-reason-incomplete-task";
import { ProcessMilestoneStatusReasonFailedJob } from "@alf/models/process/process-milestone-status-reason-failed-job";
import { ProcessMilestoneStatusReasonControlResults } from "@alf/models/process/process-milestone-status-reason-control-results";
import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonManual } from "@alf/models/process/process-milestone-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonManualSerializer implements Serializer<ProcessMilestoneStatusReasonManual> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonManual
    deserialize(data: any): ProcessMilestoneStatusReasonManual | undefined {
        if (!data) {
            return undefined;
        }

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

        throw new Error("Unable to deserialize ProcessMilestoneStatusReasonManual, cannot infer type from " + data.$type);
    }

    serialize(entity: ProcessMilestoneStatusReasonManual | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonManual, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonManual | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

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

        throw new Error("Unable to serialize ProcessMilestoneStatusReasonManual, cannot infer type from " + entity.$type);
    }
}
