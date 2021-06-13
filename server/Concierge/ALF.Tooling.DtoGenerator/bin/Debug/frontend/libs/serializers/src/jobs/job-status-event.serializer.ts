import { JobDisplayStatus } from "@alf/models/jobs/enums/job-display-status";
import { Serializer } from "@alf/core/models";
import { JobStatusEvent } from "@alf/models/jobs/job-status-event";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatusEventSerializer implements Serializer<JobStatusEvent> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobStatusEvent
    deserialize(data: any): JobStatusEvent | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.when = new Date(copy.when);

        copy.status = JobDisplayStatus[copy.status];

        return new JobStatusEvent(copy);
    }

    serialize(entity: JobStatusEvent | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobStatusEvent, _forceTypeHint?: boolean): any
    serialize(entity: JobStatusEvent | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobStatusEvent.typeNameHint : undefined,
            when: entity.when
                ? entity.when.toISOString()
                : undefined,
            status: JobDisplayStatus[entity.status]
        };
    }
}
