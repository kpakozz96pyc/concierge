import { Serializer } from "@alf/core/models";
import { ProcessPlanEventLog } from "@alf/models/logging/process-plan-event-log";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanEventLogSerializer implements Serializer<ProcessPlanEventLog> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessPlanEventLog
    deserialize(data: any): ProcessPlanEventLog | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changedAt = new Date(copy.changedAt);

        return new ProcessPlanEventLog(copy);
    }

    serialize(entity: ProcessPlanEventLog | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessPlanEventLog, _forceTypeHint?: boolean): any
    serialize(entity: ProcessPlanEventLog | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessPlanEventLog.typeNameHint : undefined,
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
            type: entity.type
        };
    }
}
