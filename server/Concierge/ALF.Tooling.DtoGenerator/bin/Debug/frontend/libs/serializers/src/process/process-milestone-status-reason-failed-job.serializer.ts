import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonFailedJob } from "@alf/models/process/process-milestone-status-reason-failed-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonFailedJobSerializer implements Serializer<ProcessMilestoneStatusReasonFailedJob> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonFailedJob
    deserialize(data: any): ProcessMilestoneStatusReasonFailedJob | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessMilestoneStatusReasonFailedJob(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonFailedJob | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonFailedJob, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonFailedJob | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined
        };
    }
}
