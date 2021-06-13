import { Serializer } from "@alf/core/models";
import { ProcessTemplateMilestone } from "@alf/models/template/process-template-milestone";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateMilestoneSerializer implements Serializer<ProcessTemplateMilestone> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateMilestone
    deserialize(data: any): ProcessTemplateMilestone | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateMilestone(copy);
    }

    serialize(entity: ProcessTemplateMilestone | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateMilestone, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateMilestone | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateMilestone.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            templateId: entity.templateId,
            isInherited: entity.isInherited,
            declaredInTemplate: entity.declaredInTemplate,
            canRestore: entity.canRestore,
            ordering: entity.ordering,
            steps: entity.steps,
            previousMilestoneCode: entity.previousMilestoneCode,
            title: entity.title,
            description: entity.description,
            deadlineRule: entity.deadlineRule,
            deadlineTimeRule: entity.deadlineTimeRule,
            requiredPeriodStateForStart: entity.requiredPeriodStateForStart,
            resultsInPeriodState: entity.resultsInPeriodState,
            requireMilestoneForCompletion: entity.requireMilestoneForCompletion,
            requiresManualApproval: entity.requiresManualApproval,
            allowForceComplete: entity.allowForceComplete,
            autoCompleteMode: entity.autoCompleteMode,
            canDelete: entity.canDelete,
            canEdit: entity.canEdit,
            isDeleted: entity.isDeleted,
            activationDateRule: entity.activationDateRule,
            activationTimeRule: entity.activationTimeRule,
            irrelevanceRule: entity.irrelevanceRule,
            checkControlResultsForState: entity.checkControlResultsForState,
            failCheckIfControlResultsAreThisLevelOrGreater: entity.failCheckIfControlResultsAreThisLevelOrGreater,
            checkControlResultsBeforeMilestoneCompletion: entity.checkControlResultsBeforeMilestoneCompletion,
            prerequisiteTemplateMilestoneCodes: entity.prerequisiteTemplateMilestoneCodes
        };
    }
}
