﻿import { ScheduledJobScheduleModelSerializer } from "./scheduled-job-schedule-model.serializer";
import { Serializer } from "@alf/core/models";
import { ScheduledJobOrder } from "@alf/models/jobs/scheduled-job-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduledJobOrderSerializer implements Serializer<ScheduledJobOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ScheduledJobOrder
    deserialize(data: any): ScheduledJobOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.nextRunTimeUtc !== undefined)
            copy.nextRunTimeUtc = new Date(copy.nextRunTimeUtc);

        copy.model = new ScheduledJobScheduleModelSerializer().deserialize(copy.model);

        if (copy.runOnceAt !== undefined)
            copy.runOnceAt = new Date(copy.runOnceAt);

        return new ScheduledJobOrder(copy);
    }

    serialize(entity: ScheduledJobOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ScheduledJobOrder, _forceTypeHint?: boolean): any
    serialize(entity: ScheduledJobOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ScheduledJobOrder.typeNameHint : undefined,
            id: entity.id,
            jobType: entity.jobType,
            nextRunTimeUtc: entity.nextRunTimeUtc
                ? entity.nextRunTimeUtc.toISOString()
                : undefined,
            lastRunsTimeUtc: entity.lastRunsTimeUtc,
            isSystemShipped: entity.isSystemShipped,
            isAutogenerated: entity.isAutogenerated,
            model: new ScheduledJobScheduleModelSerializer().serialize(entity.model, _forceTypeHint),
            parameters: entity.parameters,
            schedule: entity.schedule,
            runOnceAt: entity.runOnceAt
                ? entity.runOnceAt.toISOString()
                : undefined,
            active: entity.active
        };
    }
}
