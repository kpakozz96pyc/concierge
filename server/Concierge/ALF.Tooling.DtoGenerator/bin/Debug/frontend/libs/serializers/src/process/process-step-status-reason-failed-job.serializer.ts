import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonFailedJob } from "@alf/models/process/process-step-status-reason-failed-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonFailedJobSerializer implements Serializer<ProcessStepStatusReasonFailedJob> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonFailedJob
    deserialize(data: any): ProcessStepStatusReasonFailedJob | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessStepStatusReasonFailedJob(copy);
    }

    serialize(entity: ProcessStepStatusReasonFailedJob | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonFailedJob, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonFailedJob | undefined, _forceTypeHint?: boolean): any | undefined {
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
