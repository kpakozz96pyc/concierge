import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonIncompleteTask } from "@alf/models/process/process-step-status-reason-incomplete-task";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonIncompleteTaskSerializer implements Serializer<ProcessStepStatusReasonIncompleteTask> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonIncompleteTask
    deserialize(data: any): ProcessStepStatusReasonIncompleteTask | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessStepStatusReasonIncompleteTask(copy);
    }

    serialize(entity: ProcessStepStatusReasonIncompleteTask | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonIncompleteTask, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonIncompleteTask | undefined, _forceTypeHint?: boolean): any | undefined {
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
