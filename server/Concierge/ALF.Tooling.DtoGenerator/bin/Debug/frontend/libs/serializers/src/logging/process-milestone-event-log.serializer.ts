import { Serializer } from "@alf/core/models";
import { ProcessMilestoneEventLog } from "@alf/models/logging/process-milestone-event-log";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneEventLogSerializer implements Serializer<ProcessMilestoneEventLog> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneEventLog
    deserialize(data: any): ProcessMilestoneEventLog | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changedAt = new Date(copy.changedAt);

        return new ProcessMilestoneEventLog(copy);
    }

    serialize(entity: ProcessMilestoneEventLog | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneEventLog, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneEventLog | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessMilestoneEventLog.typeNameHint : undefined,
            id: entity.id,
            planId: entity.planId,
            companyId: entity.companyId,
            changedByUserId: entity.changedByUserId,
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            changedByUsername: entity.changedByUsername,
            description: entity.description,
            status: entity.status,
            type: entity.type,
            milestoneId: entity.milestoneId
        };
    }
}
