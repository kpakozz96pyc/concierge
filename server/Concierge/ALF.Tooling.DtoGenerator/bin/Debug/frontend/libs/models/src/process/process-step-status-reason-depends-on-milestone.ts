
import { ProcessStepStatusReasonDependent } from "@alf/models/process/process-step-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonDependsOnMilestone extends ProcessStepStatusReasonDependent {

    static $name = "ProcessStepStatusReasonDependsOnMilestone";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnMilestone, ALF.Shared.Dto"

    milestoneId: string;

    constructor(data?: Partial<ProcessStepStatusReasonDependsOnMilestone>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonDependsOnMilestone.typeNameHint;
    }
}
