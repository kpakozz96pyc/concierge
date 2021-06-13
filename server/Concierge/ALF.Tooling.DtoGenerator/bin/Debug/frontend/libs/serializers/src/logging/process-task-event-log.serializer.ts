import { Serializer } from "@alf/core/models";
import { ProcessTaskEventLog } from "@alf/models/logging/process-task-event-log";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTaskEventLogSerializer implements Serializer<ProcessTaskEventLog> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTaskEventLog
    deserialize(data: any): ProcessTaskEventLog | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changedAt = new Date(copy.changedAt);

        return new ProcessTaskEventLog(copy);
    }

    serialize(entity: ProcessTaskEventLog | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTaskEventLog, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTaskEventLog | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTaskEventLog.typeNameHint : undefined,
            id: entity.id,
            planId: entity.planId,
            companyId: entity.companyId,
            changedByUserId: entity.changedByUserId,
            changedByUsername: entity.changedByUsername,
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            description: entity.description,
            status: entity.status,
            type: entity.type,
            milestoneId: entity.milestoneId,
            stepId: entity.stepId,
            taskId: entity.taskId
        };
    }
}
