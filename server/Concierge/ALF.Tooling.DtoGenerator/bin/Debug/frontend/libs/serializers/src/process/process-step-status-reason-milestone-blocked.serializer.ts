import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonMilestoneBlocked } from "@alf/models/process/process-step-status-reason-milestone-blocked";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonMilestoneBlockedSerializer implements Serializer<ProcessStepStatusReasonMilestoneBlocked> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonMilestoneBlocked
    deserialize(data: any): ProcessStepStatusReasonMilestoneBlocked | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessStepStatusReasonMilestoneBlocked(copy);
    }

    serialize(entity: ProcessStepStatusReasonMilestoneBlocked | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonMilestoneBlocked, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonMilestoneBlocked | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
