import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonSteps } from "@alf/models/process/process-milestone-status-reason-steps";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonStepsSerializer implements Serializer<ProcessMilestoneStatusReasonSteps> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonSteps
    deserialize(data: any): ProcessMilestoneStatusReasonSteps | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessMilestoneStatusReasonSteps(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonSteps | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonSteps, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonSteps | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            stepIds: entity.stepIds
        };
    }
}
