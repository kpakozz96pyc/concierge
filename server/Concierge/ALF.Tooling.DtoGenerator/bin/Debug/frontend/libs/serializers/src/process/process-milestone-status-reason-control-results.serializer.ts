import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonControlResults } from "@alf/models/process/process-milestone-status-reason-control-results";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonControlResultsSerializer implements Serializer<ProcessMilestoneStatusReasonControlResults> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonControlResults
    deserialize(data: any): ProcessMilestoneStatusReasonControlResults | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.deadline = new Date(copy.deadline);

        return new ProcessMilestoneStatusReasonControlResults(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonControlResults | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonControlResults, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonControlResults | undefined, _forceTypeHint?: boolean): any | undefined {
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
