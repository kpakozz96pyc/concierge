
import { ProcessStepStatusReason } from "@alf/models/process/process-step-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonMilestoneBlocked extends ProcessStepStatusReason {

    static $name = "ProcessStepStatusReasonMilestoneBlocked";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonMilestoneBlocked, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessStepStatusReasonMilestoneBlocked>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessStepStatusReasonMilestoneBlocked.typeNameHint;
    }
}
