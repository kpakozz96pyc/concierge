import { ServiceJobStatusTrackingType } from "@alf/models/jobs/enums/service-job-status-tracking-type";
import { ServiceJobStatusTrackingStatus } from "@alf/models/jobs/enums/service-job-status-tracking-status";
import { Serializer } from "@alf/core/models";
import { ServiceJobStatusTracking } from "@alf/models/jobs/service-job-status-tracking";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ServiceJobStatusTrackingSerializer implements Serializer<ServiceJobStatusTracking> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ServiceJobStatusTracking
    deserialize(data: any): ServiceJobStatusTracking | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = ServiceJobStatusTrackingType[copy.type];

        if (copy.orderedAt !== undefined)
            copy.orderedAt = new Date(copy.orderedAt);

        copy.status = ServiceJobStatusTrackingStatus[copy.status];

        return new ServiceJobStatusTracking(copy);
    }

    serialize(entity: ServiceJobStatusTracking | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ServiceJobStatusTracking, _forceTypeHint?: boolean): any
    serialize(entity: ServiceJobStatusTracking | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ServiceJobStatusTracking.typeNameHint : undefined,
            id: entity.id,
            type: ServiceJobStatusTrackingType[entity.type],
            companyId: entity.companyId,
            waitingForJobId: entity.waitingForJobId,
            orderedByUserId: entity.orderedByUserId,
            orderedByUsername: entity.orderedByUsername,
            orderedAt: entity.orderedAt
                ? entity.orderedAt.toISOString()
                : undefined,
            status: ServiceJobStatusTrackingStatus[entity.status]
        };
    }
}
