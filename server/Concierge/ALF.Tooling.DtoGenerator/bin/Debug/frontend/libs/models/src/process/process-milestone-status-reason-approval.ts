
import { ProcessMilestoneStatusReasonManual } from "@alf/models/process/process-milestone-status-reason-manual";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonApproval extends ProcessMilestoneStatusReasonManual {

    static $name = "ProcessMilestoneStatusReasonApproval";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonApproval, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonApproval>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonApproval.typeNameHint;
    }
}
