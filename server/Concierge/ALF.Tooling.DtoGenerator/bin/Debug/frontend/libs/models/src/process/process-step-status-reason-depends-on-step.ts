
import { ProcessStepStatusReasonDependent } from "@alf/models/process/process-step-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonDependsOnStep extends ProcessStepStatusReasonDependent {

    static $name = "ProcessStepStatusReasonDependsOnStep";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnStep, ALF.Shared.Dto"

    stepId: string;

    constructor(data?: Partial<ProcessStepStatusReasonDependsOnStep>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonDependsOnStep.typeNameHint;
    }
}
