
import { ProcessMilestoneStatusReason } from "@alf/models/process/process-milestone-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonDependent extends ProcessMilestoneStatusReason {

    static $name = "ProcessMilestoneStatusReasonDependent";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDependent, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonDependent>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonDependent.typeNameHint;
    }
}
