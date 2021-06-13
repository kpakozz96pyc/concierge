import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonPeriodState } from "@alf/models/process/process-milestone-status-reason-period-state";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonPeriodStateSerializer implements Serializer<ProcessMilestoneStatusReasonPeriodState> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonPeriodState
    deserialize(data: any): ProcessMilestoneStatusReasonPeriodState | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessMilestoneStatusReasonPeriodState(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonPeriodState | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonPeriodState, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonPeriodState | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            periodState: entity.periodState
        };
    }
}
