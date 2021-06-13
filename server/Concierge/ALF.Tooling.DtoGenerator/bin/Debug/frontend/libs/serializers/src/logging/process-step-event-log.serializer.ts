import { Serializer } from "@alf/core/models";
import { ProcessStepEventLog } from "@alf/models/logging/process-step-event-log";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepEventLogSerializer implements Serializer<ProcessStepEventLog> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepEventLog
    deserialize(data: any): ProcessStepEventLog | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changedAt = new Date(copy.changedAt);

        return new ProcessStepEventLog(copy);
    }

    serialize(entity: ProcessStepEventLog | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepEventLog, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepEventLog | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessStepEventLog.typeNameHint : undefined,
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
            stepId: entity.stepId
        };
    }
}
