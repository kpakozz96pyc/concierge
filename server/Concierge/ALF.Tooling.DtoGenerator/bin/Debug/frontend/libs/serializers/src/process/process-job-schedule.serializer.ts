import { ProcessJobScheduleJobSerializer } from "./process-job-schedule-job.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessJobSchedule } from "@alf/models/process/process-job-schedule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobScheduleSerializer implements Serializer<ProcessJobSchedule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessJobSchedule
    deserialize(data: any): ProcessJobSchedule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.jobs = (copy.jobs || []).map(new ProcessJobScheduleJobSerializer().deserialize);

        copy.lastStatusChangedAt = new Date(copy.lastStatusChangedAt);

        return new ProcessJobSchedule(copy);
    }

    serialize(entity: ProcessJobSchedule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessJobSchedule, _forceTypeHint?: boolean): any
    serialize(entity: ProcessJobSchedule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessJobSchedule.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            processPlanId: entity.processPlanId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            activeWhenTheseMilestonesAreActive: entity.activeWhenTheseMilestonesAreActive,
            schedule: entity.schedule,
            jobs: entity.jobs
                ? entity.jobs.map(e => new ProcessJobScheduleJobSerializer().serialize(e, _forceTypeHint))
                : undefined,
            title: entity.title,
            description: entity.description,
            status: entity.status,
            lastStatusChangedAt: entity.lastStatusChangedAt
                ? entity.lastStatusChangedAt.toISOString()
                : undefined
        };
    }
}
