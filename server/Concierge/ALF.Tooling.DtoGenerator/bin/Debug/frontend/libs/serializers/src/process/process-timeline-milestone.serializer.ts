import { ProcessTimelineMilestoneReferenceType } from "@alf/models/process/enums/process-timeline-milestone-reference-type";
import { Serializer } from "@alf/core/models";
import { ProcessTimelineMilestone } from "@alf/models/process/process-timeline-milestone";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTimelineMilestoneSerializer implements Serializer<ProcessTimelineMilestone> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTimelineMilestone
    deserialize(data: any): ProcessTimelineMilestone | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.referenceType = ProcessTimelineMilestoneReferenceType[copy.referenceType];

        copy.deadline = new Date(copy.deadline);

        return new ProcessTimelineMilestone(copy);
    }

    serialize(entity: ProcessTimelineMilestone | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTimelineMilestone, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTimelineMilestone | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTimelineMilestone.typeNameHint : undefined,
            referenceId: entity.referenceId,
            referenceType: ProcessTimelineMilestoneReferenceType[entity.referenceType],
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined,
            title: entity.title,
            status: entity.status
        };
    }
}
