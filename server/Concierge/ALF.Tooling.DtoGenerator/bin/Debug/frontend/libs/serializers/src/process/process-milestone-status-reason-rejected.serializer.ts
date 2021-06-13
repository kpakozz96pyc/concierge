import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonRejected } from "@alf/models/process/process-milestone-status-reason-rejected";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonRejectedSerializer implements Serializer<ProcessMilestoneStatusReasonRejected> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonRejected
    deserialize(data: any): ProcessMilestoneStatusReasonRejected | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessMilestoneStatusReasonRejected(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonRejected | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonRejected, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonRejected | undefined, _forceTypeHint?: boolean): any | undefined {
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
