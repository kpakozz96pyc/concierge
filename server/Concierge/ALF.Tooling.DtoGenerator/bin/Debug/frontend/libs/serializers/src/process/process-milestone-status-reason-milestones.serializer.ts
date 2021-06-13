import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonMilestones } from "@alf/models/process/process-milestone-status-reason-milestones";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonMilestonesSerializer implements Serializer<ProcessMilestoneStatusReasonMilestones> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonMilestones
    deserialize(data: any): ProcessMilestoneStatusReasonMilestones | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessMilestoneStatusReasonMilestones(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonMilestones | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonMilestones, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonMilestones | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            milestoneIds: entity.milestoneIds
        };
    }
}
