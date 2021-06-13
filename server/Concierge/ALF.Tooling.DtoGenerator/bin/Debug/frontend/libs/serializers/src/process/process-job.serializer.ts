import { Serializer } from "@alf/core/models";
import { ProcessJob } from "@alf/models/process/process-job";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessJobSerializer implements Serializer<ProcessJob> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessJob
    deserialize(data: any): ProcessJob | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.lastStatusChangedAt = new Date(copy.lastStatusChangedAt);

        return new ProcessJob(copy);
    }

    serialize(entity: ProcessJob | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessJob, _forceTypeHint?: boolean): any
    serialize(entity: ProcessJob | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessJob.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            processPlanId: entity.processPlanId,
            stepId: entity.stepId,
            templateId: entity.templateId,
            automaticProcessType: entity.automaticProcessType,
            templateJobCode: entity.templateJobCode,
            templatePreviousTaskOrJobCode: entity.templatePreviousTaskOrJobCode,
            reservationToken: entity.reservationToken,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            title: entity.title,
            description: entity.description,
            status: entity.status,
            lastStatusChangedAt: entity.lastStatusChangedAt
                ? entity.lastStatusChangedAt.toISOString()
                : undefined,
            waitingForJobId: entity.waitingForJobId,
            ordering: entity.ordering,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            isSkipped: entity.isSkipped,
            archivedReportId: entity.archivedReportId
        };
    }
}
