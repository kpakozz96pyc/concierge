
import { ProcessStepStatusReason } from "@alf/models/process/process-step-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonDependent extends ProcessStepStatusReason {

    static $name = "ProcessStepStatusReasonDependent";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependent, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessStepStatusReasonDependent>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonDependent.typeNameHint;
    }
}
