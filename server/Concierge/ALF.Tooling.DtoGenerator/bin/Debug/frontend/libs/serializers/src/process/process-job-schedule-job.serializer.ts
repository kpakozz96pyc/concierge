import { Serializer } from "@alf/core/models";
import { ProcessJobScheduleJob } from "@alf/models/process/process-job-schedule-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobScheduleJobSerializer implements Serializer<ProcessJobScheduleJob> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessJobScheduleJob
    deserialize(data: any): ProcessJobScheduleJob | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.lastStatusChangedAt = new Date(copy.lastStatusChangedAt);

        return new ProcessJobScheduleJob(copy);
    }

    serialize(entity: ProcessJobScheduleJob | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessJobScheduleJob, _forceTypeHint?: boolean): any
    serialize(entity: ProcessJobScheduleJob | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessJobScheduleJob.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            processPlanId: entity.processPlanId,
            jobScheduleId: entity.jobScheduleId,
            automaticProcessType: entity.automaticProcessType,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            parameters: entity.parameters,
            title: entity.title,
            description: entity.description,
            status: entity.status,
            lastStatusChangedAt: entity.lastStatusChangedAt
                ? entity.lastStatusChangedAt.toISOString()
                : undefined,
            yggdrasilScheduledJobId: entity.yggdrasilScheduledJobId,
            waitingForJobId: entity.waitingForJobId
        };
    }
}
