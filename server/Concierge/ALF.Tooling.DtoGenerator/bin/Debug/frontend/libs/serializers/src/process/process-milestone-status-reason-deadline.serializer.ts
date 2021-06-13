import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonDeadline } from "@alf/models/process/process-milestone-status-reason-deadline";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonDeadlineSerializer implements Serializer<ProcessMilestoneStatusReasonDeadline> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonDeadline
    deserialize(data: any): ProcessMilestoneStatusReasonDeadline | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.time = new Date(copy.time);

        return new ProcessMilestoneStatusReasonDeadline(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonDeadline | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonDeadline, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonDeadline | undefined, _forceTypeHint?: boolean): any | undefined {
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
