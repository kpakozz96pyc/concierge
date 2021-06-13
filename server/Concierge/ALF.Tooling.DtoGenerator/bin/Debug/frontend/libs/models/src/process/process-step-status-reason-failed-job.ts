
import { ProcessStepStatusReasonManual } from "@alf/models/process/process-step-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonFailedJob extends ProcessStepStatusReasonManual {

    static $name = "ProcessStepStatusReasonFailedJob";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonFailedJob, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessStepStatusReasonFailedJob>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonFailedJob.typeNameHint;
    }
}
