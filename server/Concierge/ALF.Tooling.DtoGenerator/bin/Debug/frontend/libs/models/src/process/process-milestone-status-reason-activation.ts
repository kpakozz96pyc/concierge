
import { ProcessMilestoneStatusReasonTime } from "@alf/models/process/process-milestone-status-reason-time";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonActivation extends ProcessMilestoneStatusReasonTime {

    static $name = "ProcessMilestoneStatusReasonActivation";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonActivation, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonActivation>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonActivation.typeNameHint;
    }
}
