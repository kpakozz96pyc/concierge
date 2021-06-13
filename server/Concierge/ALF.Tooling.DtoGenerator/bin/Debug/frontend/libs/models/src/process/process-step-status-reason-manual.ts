
import { ProcessStepStatusReason } from "@alf/models/process/process-step-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonManual extends ProcessStepStatusReason {

    static $name = "ProcessStepStatusReasonManual";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonManual, ALF.Shared.Dto"

    deadline: Date;

    constructor(data?: Partial<ProcessStepStatusReasonManual>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonManual.typeNameHint;
    }
}
