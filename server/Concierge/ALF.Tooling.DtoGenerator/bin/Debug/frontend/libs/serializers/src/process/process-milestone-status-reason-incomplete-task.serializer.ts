import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonIncompleteTask } from "@alf/models/process/process-milestone-status-reason-incomplete-task";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonIncompleteTaskSerializer implements Serializer<ProcessMilestoneStatusReasonIncompleteTask> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonIncompleteTask
    deserialize(data: any): ProcessMilestoneStatusReasonIncompleteTask | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessMilestoneStatusReasonIncompleteTask(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonIncompleteTask | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonIncompleteTask, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonIncompleteTask | undefined, _forceTypeHint?: boolean): any | undefined {
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
