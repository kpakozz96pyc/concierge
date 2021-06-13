
import { ProcessStepStatusReasonManual } from "@alf/models/process/process-step-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonIncompleteTask extends ProcessStepStatusReasonManual {

    static $name = "ProcessStepStatusReasonIncompleteTask";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteTask, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessStepStatusReasonIncompleteTask>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonIncompleteTask.typeNameHint;
    }
}
