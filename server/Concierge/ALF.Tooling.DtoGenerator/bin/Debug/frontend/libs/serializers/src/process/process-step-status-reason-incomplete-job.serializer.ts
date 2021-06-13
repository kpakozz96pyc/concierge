import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonIncompleteJob } from "@alf/models/process/process-step-status-reason-incomplete-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonIncompleteJobSerializer implements Serializer<ProcessStepStatusReasonIncompleteJob> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonIncompleteJob
    deserialize(data: any): ProcessStepStatusReasonIncompleteJob | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessStepStatusReasonIncompleteJob(copy);
    }

    serialize(entity: ProcessStepStatusReasonIncompleteJob | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonIncompleteJob, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonIncompleteJob | undefined, _forceTypeHint?: boolean): any | undefined {
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
