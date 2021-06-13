import { PeriodStatus } from "@alf/models/periods/enums/period-status";
import { Serializer } from "@alf/core/models";
import { ProcessMilestoneStatusReasonPeriodStatus } from "@alf/models/process/process-milestone-status-reason-period-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonPeriodStatusSerializer implements Serializer<ProcessMilestoneStatusReasonPeriodStatus> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneStatusReasonPeriodStatus
    deserialize(data: any): ProcessMilestoneStatusReasonPeriodStatus | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.periodStatus = PeriodStatus[copy.periodStatus];

        return new ProcessMilestoneStatusReasonPeriodStatus(copy);
    }

    serialize(entity: ProcessMilestoneStatusReasonPeriodStatus | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneStatusReasonPeriodStatus, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneStatusReasonPeriodStatus | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            periodStatus: PeriodStatus[entity.periodStatus]
        };
    }
}
