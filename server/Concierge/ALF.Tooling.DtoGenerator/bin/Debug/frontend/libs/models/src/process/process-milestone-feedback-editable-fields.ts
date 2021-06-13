
import { ProcessMilestoneFeedbackType } from "./enums/process-milestone-feedback-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneFeedbackEditableFields {

    static $name = "ProcessMilestoneFeedbackEditableFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneFeedbackEditableFields, ALF.Shared.Dto"

    $type: string;
    feedbackType: ProcessMilestoneFeedbackType;
    feedbackAt: Date;

    constructor(data?: Partial<ProcessMilestoneFeedbackEditableFields>) {
        Object.assign(this, data);
    }
}
