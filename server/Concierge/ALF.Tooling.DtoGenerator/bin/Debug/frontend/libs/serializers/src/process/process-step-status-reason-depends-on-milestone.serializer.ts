import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonDependsOnMilestone } from "@alf/models/process/process-step-status-reason-depends-on-milestone";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonDependsOnMilestoneSerializer implements Serializer<ProcessStepStatusReasonDependsOnMilestone> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonDependsOnMilestone
    deserialize(data: any): ProcessStepStatusReasonDependsOnMilestone | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessStepStatusReasonDependsOnMilestone(copy);
    }

    serialize(entity: ProcessStepStatusReasonDependsOnMilestone | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonDependsOnMilestone, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonDependsOnMilestone | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            milestoneId: entity.milestoneId
        };
    }
}
