
import { ProcessStepStatusReasonManual } from "@alf/models/process/process-step-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonIncompleteJob extends ProcessStepStatusReasonManual {

    static $name = "ProcessStepStatusReasonIncompleteJob";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonIncompleteJob, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessStepStatusReasonIncompleteJob>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonIncompleteJob.typeNameHint;
    }
}
