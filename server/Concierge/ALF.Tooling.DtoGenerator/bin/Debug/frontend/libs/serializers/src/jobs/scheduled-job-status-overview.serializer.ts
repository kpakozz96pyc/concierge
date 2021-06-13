import { Serializer } from "@alf/core/models";
import { ScheduledJobStatusOverview } from "@alf/models/jobs/scheduled-job-status-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduledJobStatusOverviewSerializer implements Serializer<ScheduledJobStatusOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ScheduledJobStatusOverview
    deserialize(data: any): ScheduledJobStatusOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.nextRunTime = new Date(copy.nextRunTime);

        return new ScheduledJobStatusOverview(copy);
    }

    serialize(entity: ScheduledJobStatusOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ScheduledJobStatusOverview, _forceTypeHint?: boolean): any
    serialize(entity: ScheduledJobStatusOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ScheduledJobStatusOverview.typeNameHint : undefined,
            id: entity.id,
            nextRunTime: entity.nextRunTime
                ? entity.nextRunTime.toISOString()
                : undefined,
            jobId: entity.jobId
        };
    }
}
