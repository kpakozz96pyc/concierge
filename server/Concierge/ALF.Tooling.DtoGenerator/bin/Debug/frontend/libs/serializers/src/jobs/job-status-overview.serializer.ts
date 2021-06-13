import { JobDisplayStatus } from "@alf/models/jobs/enums/job-display-status";
import { Serializer } from "@alf/core/models";
import { JobStatusOverview } from "@alf/models/jobs/job-status-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatusOverviewSerializer implements Serializer<JobStatusOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobStatusOverview
    deserialize(data: any): JobStatusOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.displayStatus = JobDisplayStatus[copy.displayStatus];

        return new JobStatusOverview(copy);
    }

    serialize(entity: JobStatusOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobStatusOverview, _forceTypeHint?: boolean): any
    serialize(entity: JobStatusOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobStatusOverview.typeNameHint : undefined,
            displayStatus: JobDisplayStatus[entity.displayStatus],
            isDone: entity.isDone,
            progress: entity.progress
        };
    }
}
