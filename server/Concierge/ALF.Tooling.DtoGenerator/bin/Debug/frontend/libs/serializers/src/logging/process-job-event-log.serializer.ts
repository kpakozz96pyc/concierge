import { Serializer } from "@alf/core/models";
import { ProcessJobEventLog } from "@alf/models/logging/process-job-event-log";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobEventLogSerializer implements Serializer<ProcessJobEventLog> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessJobEventLog
    deserialize(data: any): ProcessJobEventLog | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changedAt = new Date(copy.changedAt);

        return new ProcessJobEventLog(copy);
    }

    serialize(entity: ProcessJobEventLog | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessJobEventLog, _forceTypeHint?: boolean): any
    serialize(entity: ProcessJobEventLog | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessJobEventLog.typeNameHint : undefined,
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
            milestoneId: entity.milestoneId,
            stepId: entity.stepId,
            processJobId: entity.processJobId,
            waitingForJobId: entity.waitingForJobId,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage
        };
    }
}
