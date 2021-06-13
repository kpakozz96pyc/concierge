
import { TimeBasedProcessPlanInput } from "@alf/models/template/time-based-process-plan-input";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimeBasedProcessPlanPreviewInput extends TimeBasedProcessPlanInput {

    static $name = "TimeBasedProcessPlanPreviewInput";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.TimeBasedProcessPlanPreviewInput, ALF.Shared.Dto"

    previewUseFrom: Date;
    previewUseUntil?: Date;

    constructor(data?: Partial<TimeBasedProcessPlanPreviewInput>) {
        super(data);
        Object.assign(this, data);
        this.$type = TimeBasedProcessPlanPreviewInput.typeNameHint;
    }
}
