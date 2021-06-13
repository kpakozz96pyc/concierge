import { ProcessTimelineType } from "@alf/models/process/enums/process-timeline-type";
import { ProcessTimelineMilestoneSerializer } from "./process-timeline-milestone.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { ProcessTimeline } from "@alf/models/process/process-timeline";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTimelineSerializer implements Serializer<ProcessTimeline> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTimeline
    deserialize(data: any): ProcessTimeline | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = ProcessTimelineType[copy.type];

        copy.startDate = new Date(copy.startDate);

        copy.endDate = new Date(copy.endDate);

        copy.milestones = (copy.milestones || []).map(new ProcessTimelineMilestoneSerializer().deserialize);

        return new ProcessTimeline(copy);
    }

    serialize(entity: ProcessTimeline | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTimeline, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTimeline | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTimeline.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            type: ProcessTimelineType[entity.type],
            title: entity.title,
            subTitle: entity.subTitle,
            periodId: entity.periodId,
            processPlanId: entity.processPlanId,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate),
            milestones: entity.milestones
                ? entity.milestones.map(e => new ProcessTimelineMilestoneSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
