
import { ProcessMilestoneStatusReasonTime } from "@alf/models/process/process-milestone-status-reason-time";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonPlanStart extends ProcessMilestoneStatusReasonTime {

    static $name = "ProcessMilestoneStatusReasonPlanStart";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonPlanStart, ALF.Shared.Dto"



    constructor(data?: Partial<ProcessMilestoneStatusReasonPlanStart>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonPlanStart.typeNameHint;
    }
}
