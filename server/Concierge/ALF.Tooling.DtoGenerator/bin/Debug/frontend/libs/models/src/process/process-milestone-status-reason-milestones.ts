
import { ProcessMilestoneStatusReasonDependent } from "@alf/models/process/process-milestone-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneStatusReasonMilestones extends ProcessMilestoneStatusReasonDependent {

    static $name = "ProcessMilestoneStatusReasonMilestones";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.ProcessMilestoneStatusReasonMilestones, ALF.Shared.Dto"

    milestoneIds: string[] = [];

    constructor(data?: Partial<ProcessMilestoneStatusReasonMilestones>) {
        super(data);
        Object.assign(this, data);
        this.$type = ProcessMilestoneStatusReasonMilestones.typeNameHint;
    }
}
