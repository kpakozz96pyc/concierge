
import { ProcessMilestoneFeedbackEditableFields } from "@alf/models/process/process-milestone-feedback-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneFeedback extends ProcessMilestoneFeedbackEditableFields {

    static $name = "ProcessMilestoneFeedback";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneFeedback, ALF.Shared.Dto"

    processMilestoneId: string;
    feedbackByUserId?: string;
    feedbackByUsername?: string;

    constructor(data?: Partial<ProcessMilestoneFeedback>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneFeedback.typeNameHint;
    }
}
