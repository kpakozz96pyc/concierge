import { ProcessMilestoneStatusReasonSerializer } from "./process-milestone-status-reason.serializer";
import { ProcessMilestoneFeedbackSerializer } from "./process-milestone-feedback.serializer";
import { Serializer } from "@alf/core/models";
import { ProcessMilestone } from "@alf/models/process/process-milestone";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneSerializer implements Serializer<ProcessMilestone> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestone
    deserialize(data: any): ProcessMilestone | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.calculatedDeadline = new Date(copy.calculatedDeadline);

        copy.createdAt = new Date(copy.createdAt);

        copy.statusReasons = (copy.statusReasons || []).map(new ProcessMilestoneStatusReasonSerializer().deserialize);

        copy.feedback = (copy.feedback || []).map(new ProcessMilestoneFeedbackSerializer().deserialize);

        copy.lastStatusChangedAt = new Date(copy.lastStatusChangedAt);

        copy.actualActivationDate = new Date(copy.actualActivationDate);

        copy.calculatedActivationDate = new Date(copy.calculatedActivationDate);

        copy.deadline = new Date(copy.deadline);

        return new ProcessMilestone(copy);
    }

    serialize(entity: ProcessMilestone | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestone, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestone | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessMilestone.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            processPlanId: entity.processPlanId,
            templateMilestoneCode: entity.templateMilestoneCode,
            templatePreviousMilestoneCode: entity.templatePreviousMilestoneCode,
            templateId: entity.templateId,
            deadlineRule: entity.deadlineRule,
            calculatedDeadline: entity.calculatedDeadline
                ? entity.calculatedDeadline.toISOString()
                : undefined,
            requiresManualApproval: entity.requiresManualApproval,
            allowForceComplete: entity.allowForceComplete,
            autoCompleteMode: entity.autoCompleteMode,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            requiredPeriodStateForStart: entity.requiredPeriodStateForStart,
            resultsInPeriodState: entity.resultsInPeriodState,
            irrelevanceRule: entity.irrelevanceRule,
            prerequisiteMilestoneIds: entity.prerequisiteMilestoneIds,
            requireMilestoneForCompletion: entity.requireMilestoneForCompletion,
            steps: entity.steps,
            statusReasons: entity.statusReasons
                ? entity.statusReasons.map(e => new ProcessMilestoneStatusReasonSerializer().serialize(e, _forceTypeHint))
                : undefined,
            feedback: entity.feedback
                ? entity.feedback.map(e => new ProcessMilestoneFeedbackSerializer().serialize(e, _forceTypeHint))
                : undefined,
            title: entity.title,
            description: entity.description,
            status: entity.status,
            lastStatusChangedAt: entity.lastStatusChangedAt
                ? entity.lastStatusChangedAt.toISOString()
                : undefined,
            ordering: entity.ordering,
            actualActivationDate: entity.actualActivationDate
                ? entity.actualActivationDate.toISOString()
                : undefined,
            calculatedActivationDate: entity.calculatedActivationDate
                ? entity.calculatedActivationDate.toISOString()
                : undefined,
            activationDateRule: entity.activationDateRule,
            checkControlResultsForState: entity.checkControlResultsForState,
            failCheckIfControlResultsAreThisLevelOrGreater: entity.failCheckIfControlResultsAreThisLevelOrGreater,
            checkControlResultsBeforeMilestoneCompletion: entity.checkControlResultsBeforeMilestoneCompletion,
            isForceUnblocked: entity.isForceUnblocked,
            isForceSkipped: entity.isForceSkipped,
            isForceCompleted: entity.isForceCompleted,
            isApproved: entity.isApproved,
            isIrrelevant: entity.isIrrelevant,
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined
        };
    }
}
