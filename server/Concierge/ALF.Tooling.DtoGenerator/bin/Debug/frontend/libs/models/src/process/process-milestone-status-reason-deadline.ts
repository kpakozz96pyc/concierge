
import { ProcessMilestoneStatusReasonTime } from "@alf/models/process/process-milestone-status-reason-time";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonDeadline extends ProcessMilestoneStatusReasonTime {

    static $name = "ProcessMilestoneStatusReasonDeadline";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonDeadline, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonDeadline>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonDeadline.typeNameHint;
    }
}
