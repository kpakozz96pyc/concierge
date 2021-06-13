
import { ProcessMilestoneStatusReason } from "@alf/models/process/process-milestone-status-reason";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonTime extends ProcessMilestoneStatusReason {

    static $name = "ProcessMilestoneStatusReasonTime";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonTime, ALF.Shared.Dto"

    time: Date;

    constructor(data?: Partial<ProcessMilestoneStatusReasonTime>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonTime.typeNameHint;
    }
}
