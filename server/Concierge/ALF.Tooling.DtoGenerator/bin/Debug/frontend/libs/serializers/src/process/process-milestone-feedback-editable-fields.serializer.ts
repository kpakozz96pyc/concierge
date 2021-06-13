import { ProcessMilestoneFeedbackSerializer } from "./process-milestone-feedback.serializer";
import { ProcessMilestoneFeedback } from "@alf/models/process/process-milestone-feedback";
import { Serializer } from "@alf/core/models";
import { ProcessMilestoneFeedbackEditableFields } from "@alf/models/process/process-milestone-feedback-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneFeedbackEditableFieldsSerializer implements Serializer<ProcessMilestoneFeedbackEditableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneFeedbackEditableFields
    deserialize(data: any): ProcessMilestoneFeedbackEditableFields | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneFeedback, ALF.Shared.Dto")
            return new ProcessMilestoneFeedbackSerializer().deserialize(data);

        const copy = { ...data };
        copy.feedbackAt = new Date(copy.feedbackAt);

        return new ProcessMilestoneFeedbackEditableFields(copy);
    }

    serialize(entity: ProcessMilestoneFeedbackEditableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneFeedbackEditableFields, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneFeedbackEditableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessMilestoneFeedback, ALF.Shared.Dto")
            return new ProcessMilestoneFeedbackSerializer().serialize(entity as ProcessMilestoneFeedback, _forceTypeHint);

        return {
            $type: _forceTypeHint ? ProcessMilestoneFeedbackEditableFields.typeNameHint : undefined,
            feedbackType: entity.feedbackType,
            feedbackAt: entity.feedbackAt
                ? entity.feedbackAt.toISOString()
                : undefined
        };
    }
}
