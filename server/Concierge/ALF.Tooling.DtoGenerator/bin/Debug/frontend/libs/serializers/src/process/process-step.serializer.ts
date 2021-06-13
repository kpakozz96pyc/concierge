import { ProcessStepStatusReasonSerializer } from "./process-step-status-reason.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessStep } from "@alf/models/process/process-step";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepSerializer implements Serializer<ProcessStep> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStep
    deserialize(data: any): ProcessStep | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.calculatedDeadline = new Date(copy.calculatedDeadline);

        copy.createdAt = new Date(copy.createdAt);

        copy.statusReasons = (copy.statusReasons || []).map(new ProcessStepStatusReasonSerializer().deserialize);

        copy.lastStatusChangedAt = new Date(copy.lastStatusChangedAt);

        copy.deadline = new Date(copy.deadline);

        return new ProcessStep(copy);
    }

    serialize(entity: ProcessStep | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStep, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStep | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessStep.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            processPlanId: entity.processPlanId,
            milestoneId: entity.milestoneId,
            templateId: entity.templateId,
            templateStepCode: entity.templateStepCode,
            templatePreviousStepCode: entity.templatePreviousStepCode,
            calculatedDeadline: entity.calculatedDeadline
                ? entity.calculatedDeadline.toISOString()
                : undefined,
            deadlineFormula: entity.deadlineFormula,
            stepType: entity.stepType,
            requireMilestoneForStart: entity.requireMilestoneForStart,
            requireStepForStart: entity.requireStepForStart,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            jobs: entity.jobs,
            tasks: entity.tasks,
            statusReasons: entity.statusReasons
                ? entity.statusReasons.map(e => new ProcessStepStatusReasonSerializer().serialize(e, _forceTypeHint))
                : undefined,
            title: entity.title,
            description: entity.description,
            status: entity.status,
            lastStatusChangedAt: entity.lastStatusChangedAt
                ? entity.lastStatusChangedAt.toISOString()
                : undefined,
            ordering: entity.ordering,
            deadlineTimeFormula: entity.deadlineTimeFormula,
            useMilestoneDeadline: entity.useMilestoneDeadline,
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined
        };
    }
}
