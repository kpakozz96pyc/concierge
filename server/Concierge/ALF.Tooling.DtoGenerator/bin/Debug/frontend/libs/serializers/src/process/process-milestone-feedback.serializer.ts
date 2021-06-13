import { Serializer } from "@alf/core/models";
import { ProcessMilestoneFeedback } from "@alf/models/process/process-milestone-feedback";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneFeedbackSerializer implements Serializer<ProcessMilestoneFeedback> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneFeedback
    deserialize(data: any): ProcessMilestoneFeedback | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.feedbackAt = new Date(copy.feedbackAt);

        return new ProcessMilestoneFeedback(copy);
    }

    serialize(entity: ProcessMilestoneFeedback | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneFeedback, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneFeedback | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            processMilestoneId: entity.processMilestoneId,
            feedbackByUserId: entity.feedbackByUserId,
            feedbackByUsername: entity.feedbackByUsername,
            feedbackType: entity.feedbackType,
            feedbackAt: entity.feedbackAt
                ? entity.feedbackAt.toISOString()
                : undefined
        };
    }
}
