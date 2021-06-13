
import { ProcessMilestoneStatusReasonManual } from "@alf/models/process/process-milestone-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonRejected extends ProcessMilestoneStatusReasonManual {

    static $name = "ProcessMilestoneStatusReasonRejected";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonRejected, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonRejected>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonRejected.typeNameHint;
    }
}
