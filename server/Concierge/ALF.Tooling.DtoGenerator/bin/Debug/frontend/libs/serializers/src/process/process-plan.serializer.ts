import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { ProcessPlan } from "@alf/models/process/process-plan";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanSerializer implements Serializer<ProcessPlan> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessPlan
    deserialize(data: any): ProcessPlan | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        if (copy.recurrenceDate !== undefined)
            copy.recurrenceDate = new Date(copy.recurrenceDate);

        copy.startDate = new Date(copy.startDate);

        copy.endDate = new Date(copy.endDate);

        if (copy.earliestStartDate !== undefined)
            copy.earliestStartDate = new Date(copy.earliestStartDate);

        if (copy.latestStartDate !== undefined)
            copy.latestStartDate = new Date(copy.latestStartDate);

        copy.createStartedAt = new Date(copy.createStartedAt);

        if (copy.cycleStartDate !== undefined)
            copy.cycleStartDate = new Date(copy.cycleStartDate);

        if (copy.cycleEndDate !== undefined)
            copy.cycleEndDate = new Date(copy.cycleEndDate);

        if (copy.intervalStartDate !== undefined)
            copy.intervalStartDate = new Date(copy.intervalStartDate);

        if (copy.intervalEndDate !== undefined)
            copy.intervalEndDate = new Date(copy.intervalEndDate);

        copy.lastStatusChangedAt = new Date(copy.lastStatusChangedAt);

        if (copy.manualActionDeadline !== undefined)
            copy.manualActionDeadline = new Date(copy.manualActionDeadline);

        return new ProcessPlan(copy);
    }

    serialize(entity: ProcessPlan | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessPlan, _forceTypeHint?: boolean): any
    serialize(entity: ProcessPlan | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessPlan.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            templateId: entity.templateId,
            periodId: entity.periodId,
            controlResultsId: entity.controlResultsId,
            periodNumber: entity.periodNumber,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            recurrenceDate: entity.recurrenceDate
                ? entity.recurrenceDate.toISOString()
                : undefined,
            startDate: entity.startDate
                ? entity.startDate.toISOString()
                : undefined,
            endDate: serializeDate(entity.endDate),
            intervalType: entity.intervalType,
            intervalLength: entity.intervalLength,
            processType: entity.processType,
            tags: entity.tags,
            earliestStartDate: serializeDate(entity.earliestStartDate),
            latestStartDate: serializeDate(entity.latestStartDate),
            startDateRule: entity.startDateRule,
            createDateRule: entity.createDateRule,
            createStartedAt: entity.createStartedAt
                ? entity.createStartedAt.toISOString()
                : undefined,
            isBeingCreatedByJobId: entity.isBeingCreatedByJobId,
            cycleStartDate: serializeDate(entity.cycleStartDate),
            cycleEndDate: serializeDate(entity.cycleEndDate),
            intervalStartDate: serializeDate(entity.intervalStartDate),
            intervalEndDate: serializeDate(entity.intervalEndDate),
            milestones: entity.milestones,
            title: entity.title,
            description: entity.description,
            status: entity.status,
            lastStatusChangedAt: entity.lastStatusChangedAt
                ? entity.lastStatusChangedAt.toISOString()
                : undefined,
            nextEventScheduledJobId: entity.nextEventScheduledJobId,
            isForceSkipped: entity.isForceSkipped,
            manualActionNeeded: entity.manualActionNeeded,
            manualActionDeadline: entity.manualActionDeadline
                ? entity.manualActionDeadline.toISOString()
                : undefined,
            isGarbageCollected: entity.isGarbageCollected,
            isBeingCreated: entity.isBeingCreated
        };
    }
}
