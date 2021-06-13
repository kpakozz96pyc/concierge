import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonPlanStart } from "@alf/models/process/process-milestone-status-reason-plan-start";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonPlanStartSerializer implements Serializer<ProcessMilestoneStatusReasonPlanStart> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonPlanStart
    deserialize(data: any): ProcessMilestoneStatusReasonPlanStart | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.time = new Date(copy.time);

        return new ProcessMilestoneStatusReasonPlanStart(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonPlanStart | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonPlanStart, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonPlanStart | undefined, _forceTypeHint?: boolean): any | undefined {
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
