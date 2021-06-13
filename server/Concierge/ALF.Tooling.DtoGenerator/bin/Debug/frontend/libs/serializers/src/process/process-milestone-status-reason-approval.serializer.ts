import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonApproval } from "@alf/models/process/process-milestone-status-reason-approval";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonApprovalSerializer implements Serializer<ProcessMilestoneStatusReasonApproval> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonApproval
    deserialize(data: any): ProcessMilestoneStatusReasonApproval | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessMilestoneStatusReasonApproval(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonApproval | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonApproval, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonApproval | undefined, _forceTypeHint?: boolean): any | undefined {
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
