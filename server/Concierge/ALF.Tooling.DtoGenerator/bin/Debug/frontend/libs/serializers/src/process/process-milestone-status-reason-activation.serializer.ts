import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonActivation } from "@alf/models/process/process-milestone-status-reason-activation";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonActivationSerializer implements Serializer<ProcessMilestoneStatusReasonActivation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonActivation
    deserialize(data: any): ProcessMilestoneStatusReasonActivation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.time = new Date(copy.time);

        return new ProcessMilestoneStatusReasonActivation(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonActivation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonActivation, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonActivation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            time: entity.time
                ? entity.time.toISOString()
                : undefined
        };
    }
}
