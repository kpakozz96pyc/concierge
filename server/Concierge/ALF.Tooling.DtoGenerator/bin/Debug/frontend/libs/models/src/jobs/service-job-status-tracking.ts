
import { ServiceJobStatusTrackingType } from "./enums/service-job-status-tracking-type";
import { ServiceJobStatusTrackingStatus } from "./enums/service-job-status-tracking-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ServiceJobStatusTrackingId = string;

export class ServiceJobStatusTracking {

    static $name = "ServiceJobStatusTracking";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.ServiceJobStatusTracking, ALF.Shared.Dto"

    id: ServiceJobStatusTrackingId;
    type: ServiceJobStatusTrackingType;
    companyId?: string;
    waitingForJobId?: string;
    orderedByUserId?: string;
    orderedByUsername?: string;
    orderedAt?: Date;
    status: ServiceJobStatusTrackingStatus;

    constructor(data?: Partial<ServiceJobStatusTracking>) {
        Object.assign(this, data);
    }
}
